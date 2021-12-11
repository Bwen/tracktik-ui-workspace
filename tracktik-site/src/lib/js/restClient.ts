
enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS',
    HEAD = 'HEAD',
};

async function request(path: string, method: METHODS = METHODS.GET, params: object = {}, portalDomain = '') {
    try {
        let headers = {
            'Content-Type': 'application/json',
            'rest-path': path,
            'rest-method': method.toUpperCase(),
        };

        if (portalDomain) {
            headers['rest-domain'] = portalDomain;
        }

        return await fetch('/rest', {
            headers,
            method: 'POST',
            body: JSON.stringify(params),
        });
    } catch (err) {
        console.error(err);
    }

    return undefined;
}

export {
    request,
    METHODS,
};
