import { sequence } from '@sveltejs/kit/hooks';
import middlewares from './server/middlewares';

export const handle = sequence(...middlewares);

/** @type {import('@sveltejs/kit').GetSession} */
export async function getSession({ locals }) {
    if (!locals.sessionId) {
        return {};
    }

    let session = {};
    if (locals.portal) {
        session['portal'] = locals.portal;
    }

    // Omit all tokens from auth
    if (locals.auth) {
        session['auth'] = {
            portal: locals.auth.auth.portal,
            permissions: locals.auth.auth.permissions,
            pref: locals.auth.pref,
            scopes: locals.auth.scopes,
            user: locals.auth.user,
        };
    }
    
    session.locale = locals.locale;
    return session;
}
