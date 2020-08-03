import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { Wrapper } from './HeaderStyle';
import { ReactComponent as LogoIcon } from '../../_media/logo.svg';
import HeaderMenu from './HeaderMenu';
import paths from '../../_helpers/paths';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { loginModule } from '../../pages/LoginPage/LoginDucks';
import './HeaderTranslate';

export default function Header() {
  const { t } = useTranslation();
  const history = useHistory();
  const user = useSelector((state) => state[loginModule].user);
  return (
    <Wrapper>
      <AppBar position="fixed">
        <div className="scroll-fix">
          <Toolbar className="content" style={{ padding: 0 }}>
            <Link className="logo" to={paths.advertsPage}>
              <LogoIcon />
            </Link>
            {user && <HeaderMenu />}
            {!user && (
              <Button
                variant="text"
                color="inherit"
                children={t('header_login')}
                onClick={() => history.push(paths.loginPage)}
              />
            )}
          </Toolbar>
        </div>
      </AppBar>
    </Wrapper>
  );
}
