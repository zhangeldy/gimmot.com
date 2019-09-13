import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Wrapper } from './HeaderStyle';
import { ReactComponent as LogoIcon } from '../../_media/logo.svg';
import HeaderMenu from './HeaderMenu';
import InheritButton from '../../_ui/Button/InheritButton';
import withTranslation from '../_hoc/withTranslation';
import { history } from '../../_helpers/history';
import paths from '../../_helpers/paths';

function Header({ user, t }) {
  return (
    <Wrapper>
      <AppBar position="fixed">
        <div className="scroll-fix">
          <Toolbar className="content">
            <Link className="logo" to={paths.advertsPage}>
              <LogoIcon />
            </Link>
            {user && <HeaderMenu />}
            {!user && (
              <InheritButton
                text={t('header_login')}
                onClick={() => history.push(paths.loginPage)}
              />
            )}
          </Toolbar>
        </div>
      </AppBar>
    </Wrapper>
  );
}

export default withTranslation(Header);
