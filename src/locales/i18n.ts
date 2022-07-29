import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import BrowserLanguageDetector from "i18next-browser-languagedetector";

import EN_Translation from "./en/translation.json";

const resources = {
    en: {
        translation: EN_Translation,
    },
};

i18n.use(Backend)
    .use(BrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        debug: true,
        react: {
            useSuspense: false,
        },
        detection: {
            order: ["localStorage", "cookie", "htmlTag", "path", "subdomain"],
            caches: ["cookie"],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
