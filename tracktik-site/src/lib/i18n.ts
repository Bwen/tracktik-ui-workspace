import { 
    t as text, 
    locale as currentLocale,
    init as i18nInit,
    register,
    waitLocale,
} from 'svelte-i18n';

export async function init(session) {
    register('en', () => import('$locales/en-us.json'));
    register('en-us', () => import('$locales/en-us.json'));
    register('fr', () => import('$locales/fr-ca.json'));
    register('fr-ca', () => import('$locales/fr-ca.json'));

    i18nInit({
        fallbackLocale: 'en-us',
        initialLocale: session.locale,
    });

    await waitLocale();
};

export const locale = currentLocale;
export const t = text;