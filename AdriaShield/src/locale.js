import { reactive } from 'vue';

const fallBackLocale = 'en';

const locale = reactive({
  language: fallBackLocale,
  pageContent: {},
  fallbackContent: {},
  commonContent: {},
  fallbackCommonContent: {},
  currentPage: null,
  loading: false,
});

async function loadLocale(language, page) {
    try {
        return await import(`./locales/${language}/${page}.json`);
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

    loadCommonLocale();
}

async function loadCommonLocale() {
    locale.commonContent = await loadLocale(locale.language, "common");
    locale.fallbackCommonContent = await loadLocale(fallBackLocale, "common");
}

async function loadPageLocale(pageName) {
    locale.loading = true;

    locale.currentPage = pageName;

    locale.pageContent = await loadLocale(locale.language, locale.currentPage);
    locale.fallbackContent = await loadLocale(fallBackLocale, loadLocale.currentPage);

    locale.loading = false;
}

function l(key) {
    return locale.pageContent?.[key] 
        ?? locale.commonContent?.[key]
        ?? locale.fallbackContent?.[key] 
        ?? locale.fallbackCommonContent?.[key]
        ?? key;
}

export { locale, l, setLanguage, loadPageLocale, loadCommonLocale };
