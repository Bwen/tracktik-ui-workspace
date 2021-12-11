import { 
    t as text, 
    locale as currentLocale,
    init as i18nInit,
    register,
    waitLocale,
} from 'svelte-intl-precompile';

export async function init(session) {
    register('en', () => import('$lib/locales/en-us.json'));
    register('en-us', () => import('$lib/locales/en-us.json'));
    register('fr', () => import('$lib/locales/fr-ca.json'));
    register('fr-ca', () => import('$lib/locales/fr-ca.json'));

    i18nInit({
        fallbackLocale: 'en-us',
        initialLocale: session.locale,
    });

    await waitLocale();
};

export const locale = currentLocale;
export const t = text;
