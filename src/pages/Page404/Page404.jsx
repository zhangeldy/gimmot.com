import React from 'react';
import withTranslation from '../../components/_hoc/withTranslation';
import { CssBox } from './Page404Style';
import Button from '../../_ui/Button/Button';
import { Link } from 'react-router-dom';
import paths from '../../_helpers/paths';

function Page404({ t }) {
  return (
    <CssBox>
      <div className="container">
        <div className="error">404</div>
        <div className="oops">{t('page404_oops')}</div>
        <div className="not-found">{t('page404_notFound')}</div>
        <Link to={paths.loginPage}>
          <Button text={t('page404_toHome')} size="large" />
        </Link>
      </div>
    </CssBox>
  );
}

export default withTranslation(Page404);
