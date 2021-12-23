import { browser } from '$app/env';

enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS',
    HEAD = 'HEAD',
};

async function request(path: string, method: METHODS = METHODS.GET, params: object = {}, portalDomain = '', svelteFetch = undefined) {
    try {
        let headers = {
            'Content-Type': 'application/json',
            'rest-path': path,
            'rest-method': method.toUpperCase(),
        };

        if (portalDomain) {
            headers['rest-domain'] = portalDomain;
        }

        let sfetch = svelteFetch || fetch;
        let res = await sfetch('/rest', {
            headers,
            method: 'POST',
            body: JSON.stringify(params),
        });
        
        if (res.status === 401 && '/auth' !== path) {
            location.reload();
        }

        return res;
    } catch (err) {
        console.error(err);
    }

    return undefined;
}

export {
    request,
    METHODS,
};
