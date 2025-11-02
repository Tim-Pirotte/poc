import { reactive } from 'vue';

const fallBackLocale = 'en';

const locale = reactive({
  language: fallBackLocale,
  pageContent: {},
  fallbackContent: {},
  currentPage: null,
  loading: false,
});

async function loadLocale(language) {
    try {
        return await import(`./locales/${language}/${locale.currentPage}.json`);
    } catch (error) {
        console.error(`Error loading a locale: ${error.message}`);

        return {};
    }
}

function setLanguage(language) {
    locale.language = language;

    if (locale.currentPage) {
        loadPageLocale(locale.currentPage);
    }
}

async function loadPageLocale(pageName) {
    locale.loading = true;

    locale.currentPage = pageName;

    locale.pageContent = await loadLocale(locale.language);
    locale.fallbackContent = await loadLocale(fallBackLocale);

    locale.loading = false;
}

function l(key) {
    return locale.pageContent?.[key] ?? locale.fallbackContent?.[key] ?? key;
}

export { locale, l, setLanguage, loadPageLocale };
