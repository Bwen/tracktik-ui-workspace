import cookie from 'cookie';
import { v4 as uuidv4 } from 'uuid';

const SESSION_COOKIE_TTL: number = sanitizeTTL(process.env['SESSION_COOKIE_TTL'], 60 * 30);
const SESSION_REDIS_TTL: number = sanitizeTTL(process.env['SESSION_REDIS_TTL'], SESSION_COOKIE_TTL * 5);

function sanitizeTTL(ttl: any, def: number): number {
    let parsedTTL = parseInt(ttl, 10);
    return !isNaN(parsedTTL) ? parsedTTL : def;
}

/** @type {import('@sveltejs/kit').Handle} */
export default async function ({ request, resolve }) {
    let cookies = cookie.parse(request.headers.cookie || '');

    request.locals.sessionId = uuidv4();
    if (cookies['rest-session-id']) {
        request.locals.sessionId = cookies['rest-session-id'];
    }
    
    const KEY_PORTAL = `${request.locals.sessionId}:portal`;
    const KEY_AUTH = `${request.locals.sessionId}:auth`;
    const KEY_LOCALE = `${request.locals.sessionId}:locale`;
    const KEY_REST_REGION_FILTER = `${request.locals.sessionId}:rest-region-filter`;

    const portal = await request.locals.redis.get(KEY_PORTAL);
    if (portal) {
        request.locals.portal = JSON.parse(portal);
    }

    const auth = await request.locals.redis.get(KEY_AUTH);
    if (auth) {
        request.locals.auth = JSON.parse(auth);
    }

    const locale = await request.locals.redis.get(KEY_LOCALE);
    if (locale) {
        request.locals.locale = locale;
    }

    const regionFilter = await request.locals.redis.get(KEY_REST_REGION_FILTER);
    if (request.headers['rest-region-filter'] !== undefined) {
        request.locals['rest-region-filter'] = request.headers['rest-region-filter'];
        request.locals.redis.set(KEY_REST_REGION_FILTER, request.headers['rest-region-filter'], 'EX', SESSION_REDIS_TTL);
    } else if (regionFilter) {
        request.locals['rest-region-filter'] = regionFilter;
    }

	const response = await resolve(request);

    if (request.path === '/rest') {
        // If we are retrieving the portal details, we save it in the session
        if (response.status === 200 && request.headers['rest-path'] === '/about') {
            request.locals.redis.set(KEY_PORTAL, response.body, 'EX', SESSION_REDIS_TTL);
        }

        // If we are login in, save the logged in user
        if (response.status === 200 && request.headers['rest-path'] === '/auth') {
            request.locals.redis.set(KEY_LOCALE, request.body.language, 'EX', SESSION_REDIS_TTL);
            request.locals.redis.set(KEY_AUTH, response.body, 'EX', SESSION_REDIS_TTL);
        }
    }

    response.headers['Set-Cookie'] = cookie.serialize(
        'rest-session-id', 
        request.locals.sessionId,
        {
            httpOnly: false,
            maxAge: SESSION_COOKIE_TTL,
            path: '/',
        }
    );

	return response;
};
