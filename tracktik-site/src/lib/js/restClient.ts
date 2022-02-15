import { get } from  'svelte/store';
import { clientIp } from '$lib/stores/clientIp';
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

async function request(path: string, method: METHODS = METHODS.GET, params: object = {}, restHeaders = {}) {
    try {
        let headers = {
            'Content-Type': 'application/json',
            'rest-path': path,
            'rest-method': method.toUpperCase(),
            ...restHeaders,
        };

        const ip = get(clientIp);
        if (ip) {
            headers['rest_forwarded_for'] = ip;
        }

        let url = '/rest';
        if (!browser) {
            const host = process.env["CLIENT_HOST"];
            const protocol = process.env["CLIENT_PROTOCOL"];
            url = `${protocol}//${host}/rest`;
        }

        let res = await fetch(url, {
            headers,
            method: 'POST',
            body: JSON.stringify(params),
        });

        if (res.status === 401 && '/auth' !== path) {
            if (browser) {
                location.reload();
            }
        }

        return res;
    } catch (err) {
        console.warn(err);
    }

    return undefined;
}

export {
    request,
    METHODS,
};
