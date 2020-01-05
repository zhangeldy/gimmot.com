import Translate from 'i18next';
import { initReactI18next } from 'react-i18next';
import Page403Translate from '../pages/Page403/Page403Translate';
import Page404Translate from '../pages/Page404/Page404Translate';

const resources = {
  ru: {
    translation: {
      ...Page403Translate.ru,
      ...Page404Translate.ru
    }
  }
};

Translate.use(initReactI18next).init({ resources, lng: 'ru' });

export function translation(key, options) {
  return Translate.t(key, options);
}
export default Translate;
