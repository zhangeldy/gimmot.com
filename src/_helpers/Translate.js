import Translate from 'i18next';
import { initReactI18next } from 'react-i18next';
import Page403Translate from '../pages/Page403/Page403Translate';
import Page404Translate from '../pages/Page404/Page404Translate';
import AdvertTranslate from '../pages/AdvertsPage/AdvertTranslate';
import HeaderTranslate from '../components/Header/HeaderTranslate';

const resources = {
  ru: {
    translation: {
      ...Page403Translate.ru,
      ...Page404Translate.ru,
      ...AdvertTranslate.ru,
      ...HeaderTranslate.ru
    }
  }
};

Translate.use(initReactI18next).init({ resources, lng: 'ru' });
export default Translate;
