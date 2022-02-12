import { browser } from '$app/env';

/** @type {import('@sveltejs/kit').Handle} */
export default async function ({ request, resolve }) {
    if (['/rest', '/session'].indexOf(request.url.pathname) !== -1) {
        return await resolve(request);
    }

    let authOrSetupRegex = new RegExp(`^/auth(/setup|.*|)`);
    console.log('regexp 1: ', request.url.pathname.match(authOrSetupRegex));
    if (browser && !request.url.pathname.match(authOrSetupRegex) && (!request.locals.auth || !request.locals.auth.user)) {
        return { status: 401 };
    }

    // If no portal domains redirect to auth/setup
    let setupRregex = new RegExp(`^/auth/(setup|.*|)$`);
    console.log('regexp 2: ', request.url.pathname.match(setupRregex));
	if (!request.url.pathname.match(setupRregex) && (!request.locals.portal || !request.locals.portal.url)) {
        return { headers: { Location: '/auth/setup' }, status: 302 };
    }

    // If no user session (not logged in) redirect to login
    console.log('regexp 3: ', request.url.pathname.match(authOrSetupRegex));
	if (!request.url.pathname.match(authOrSetupRegex) && (!request.locals.auth || !request.locals.auth.user)) {
        return { headers: { Location: '/auth' }, status: 302 };
    }

    // If we are trying to access a portal we dont have access to, redirect to the right portal
    if (request.locals.auth && request.locals.auth.auth) {
        let portal = request.locals.auth.auth.portal;
        let regex = new RegExp(`^/portal/${portal}`)
        if (!request.url.pathname.match(regex)) {
            return { headers: { Location: `/portal/${portal}` }, status: 302 };
        }
    }

    console.log('VICTORY!');
    return await resolve(request);
};
