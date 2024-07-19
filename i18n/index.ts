import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export { useTranslation } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require("./translations/en.json"),
    },
  },
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: "v3",
});

export default {
  withScope: function (scope: string) {
    return i18n.getFixedT(null, null, scope);
  },
  t: i18n.t,
};
