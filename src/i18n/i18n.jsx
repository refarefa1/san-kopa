import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

const DEFAULT_LANG = 'he';

const ALL_NAME_SPACES = [
    'System',
    'Models',
    'Terms',
    'Filter',
    'Navbar',
    'Auth',
];

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: DEFAULT_LANG,
        fallbackLng: DEFAULT_LANG,
        ns: ALL_NAME_SPACES,
        backend: {
            loadPath: '/src/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
