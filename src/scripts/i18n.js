import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import updateTranslations from "./utils/translations";
import enTranslations from "../locales/en/translation.json";
import esTranslations from "../locales/es/translation.json";

const resources = {
  en: { translation: enTranslations },
  es: { translation: esTranslations },
};

i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
  })
  .then(() => {
    updateTranslations();
  });

i18next.on("languageChanged", () => {
  updateTranslations();
});

export default i18next;
