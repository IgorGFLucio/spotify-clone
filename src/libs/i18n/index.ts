/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, ptBR } from '@translations';

const resources = {
  en: {
    translation: en,
  },
  pt: {
    translation: ptBR,
  },
};

function getDeviceLanguage() {
  // i18n.changeLanguage(lng); use to change language manualy
  return `pt`;
}

i18n.use(initReactI18next).init({
  compatibilityJSON: `v3`,
  resources,
  //language to use if translations in user language are not available
  fallbackLng: `pt`,
  lng: getDeviceLanguage(),
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;
