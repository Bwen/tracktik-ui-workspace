import {
    json as jsonFn,
    t as tFn,
    time as timeFn,
    date as dateFn,
    locale as currentLocale,
    init as i18nInit,
    register,
    waitLocale,
} from 'svelte-i18n';

export async function init(session): Promise<void> {
    register('en', () => import('$locales/en-us.json'));
    register('en-us', () => import('$locales/en-us.json'));
    register('fr', () => import('$locales/fr-ca.json'));
    register('fr-ca', () => import('$locales/fr-ca.json'));

    i18nInit({
        fallbackLocale: 'en-us',
        initialLocale: session.locale,
    });

    await waitLocale();
}

export const json = jsonFn;
export const locale = currentLocale;
export const t = tFn;
export const time = timeFn;
export const date = dateFn;
