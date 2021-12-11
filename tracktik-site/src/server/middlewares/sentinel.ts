

/** @type {import('@sveltejs/kit').Handle} */
export default async function ({ request, resolve }) {
    if (request.path === '/rest') {
        return await resolve(request);
    }

    // If no portal domains redirect to auth/setup
	if (request.path !== '/auth/setup' && (!request.locals.portal || !request.locals.portal.url)) {
        return { headers: { Location: '/auth/setup' }, status: 302 };
    }

    // If no user session (not logged in) redirect to login
	if (['/auth/setup', '/auth'].indexOf(request.path) === -1 && (!request.locals.auth || !request.locals.auth.user)) {
        return { headers: { Location: '/auth' }, status: 302 };
    }

    return await resolve(request);
};
