import React from 'react';
import { CssBox } from './Page403Style';
import { Link } from 'react-router-dom';
import paths from '../../_helpers/paths';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

export default function Page403() {
  const { t } = useTranslation();
  return (
    <CssBox>
      <div className="container">
        <div className="error">403</div>
        <div className="oops">{t('page403_oops')}</div>
        <div className="not-found">{t('page403_access')}</div>
        <Link to={paths.loginPage}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            children={t('page403_toHome')}
          />
        </Link>
      </div>
    </CssBox>
  );
}
