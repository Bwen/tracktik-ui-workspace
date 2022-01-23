
export async function post({ locals, body, headers }) {
    let { sessionId } = locals;

    if (!sessionId && !Object.hasOwnProperty.call(headers, 'rest-domain')) {
        return { status: 400, body: { message: 'Missing Rest-Domain or Rest-Session-Id header' } };
    }

    if (!Object.hasOwnProperty.call(headers, 'rest-path')) {
        return { status: 400, body: { message: 'Missing Rest-Path header' } };
    }

    let domain = headers['rest-domain'];
    if (!domain && locals.portal) {
        domain = locals.portal.url;
    }

    if (domain === undefined && '/auth' !== headers['rest-path']) {
        return { status: 401 };
    }

    let path = headers['rest-path'] || '';
    let method = headers['rest-method'] || 'GET';
    let responseHeaders = {};
    let options = {
        headers: { 'Content-Type': 'application/json' },
        method,
    };

    if (locals.auth) {
        options.headers['Authorization'] = `Bearer ${locals.auth.auth.token}`;
    }

    if (locals['rest-region-filter']) {
        options.headers['TTC-Region-Filter'] = locals['rest-region-filter'];
    }

    if (headers['http_x_forwarded_for']) {
        options.headers['http_x_forwarded_for'] = headers['http_x_forwarded_for'];
    }

    let url = new URL(`https://${domain}/rest/v1${path}`);
    if (Object.keys(body).length !== 0) {
        if (['OPTION','HEAD','GET'].indexOf(method) !== -1) {
            url.search = new URLSearchParams(body).toString();
        } else {
            options['body'] = JSON.stringify(body);
        }
    }

    let error = 'Internal Error (Server)';
    let errorCode = 500;
    try {
        let res = await fetch(url, options);
        if (res.ok) {
            return {
                status: res.status,
                headers: responseHeaders,
                body: await res.json(),
            };
        }

        errorCode = res.status;
        error = res.statusText;
    } catch (err) {
        console.error(err);
        error = err.message;
    }

    return {
        status: errorCode,
        body: { message: error },
    }
}
