import { browser } from '$app/env';

/** @type {import('@sveltejs/kit').Handle} */
export default async function ({ request, resolve }) {
    if (['/rest', '/session'].indexOf(request.path) !== -1) {
        return await resolve(request);
    }

    if (browser && ['/auth/setup', '/auth'].indexOf(request.path) === -1 && (!request.locals.auth || !request.locals.auth.user)) {
        return { status: 401 };
    }

    // If no portal domains redirect to auth/setup
	if (request.path !== '/auth/setup' && (!request.locals.portal || !request.locals.portal.url)) {
        return { headers: { Location: '/auth/setup' }, status: 302 };
    }

    // If no user session (not logged in) redirect to login
	if (['/auth/setup', '/auth'].indexOf(request.path) === -1 && (!request.locals.auth || !request.locals.auth.user)) {
        return { headers: { Location: '/auth' }, status: 302 };
    }

    // If we are trying to access a portal we dont have access to, redirect to the right portal
    if (request.locals.auth && request.locals.auth.auth) {
        let portal = request.locals.auth.auth.portal;
        let regex = new RegExp(`^/portal/${portal}`)
        if (!request.path.match(regex)) {
            return { headers: { Location: `/portal/${portal}` }, status: 302 };
        }
    }

    return await resolve(request);
};
