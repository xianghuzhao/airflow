import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en_trans from "./locales/en/translation.json";
import zh_trans from "./locales/zh/translation.json";

i18n
  .use(initReactI18next)
  .init({
    lng: Airflow.locale,
    fallbackLng: "en",
    defaultNS: "translation",
    partialBundledLanguages: true,
    ns: [],
    resources: {},
  });

i18n.addResourceBundle("en", "translation", en_trans);
i18n.addResourceBundle("zh", "translation", zh_trans);

export default i18n;
