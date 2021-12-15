
const supportedLocales = [
    'en-us',
    'fr',
    'ro',
    'es',
    'de',
    'nl',
    'pt',
    'sv',
    'zh-hans',
    'th',
];

/** @type {import('@sveltejs/kit').Handle} */
export default async function ({ request, resolve }) {
    const { headers } = request;

    // Sane default locale
    let locale = 'en-us';

    // If the browser's locale is supported use it
    const browserLocale = headers['accept-language'] && headers['accept-language'].split(',')[0];
    if (browserLocale && supportedLocales.indexOf(browserLocale.toLowerCase()) !== -1) {
        locale = browserLocale.toLowerCase();
    }
    // If the browser's locale is NOT supported check portal's defaultLanguage
    else if (request.locals['portal'] && request.locals['portal'].defaultLanguage) {
        locale = request.locals['portal'].defaultLanguage.toLowerCase();
    }

    // If we have a locale set in "server/middlewares/session.ts", it takes priority
    if (request.locals['locale']) {
        locale = request.locals['locale'];
    }
    
    request.locals['locale'] = locale;

    return await resolve(request);
};
