import React, { useState } from 'react';
import MenuItem from '../../_ui/Menu/MenuItem';
import Menu from '../../_ui/Menu/Menu';
import withTranslation from '../_hoc/withTranslation';
import AccountIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ForwardIcon from '@material-ui/icons/Forward';
import { Link } from 'react-router-dom';
import IconButton from '../../_ui/Button/IconButton';

function HeaderMenu({ t }) {
  const [anchor, setAnchor] = useState(null);
  const menuItems = [
    { text: t('headerMenu_profile'), path: '/profile', icon: AccountIcon },
    { text: t('headerMenu_settings'), path: '/settings', icon: SettingsIcon },
    { text: t('headerMenu_logout'), path: '/logout', icon: ForwardIcon },
  ];
  return (
    <div>
      <IconButton
        color="inherit"
        onClick={ev => setAnchor(ev.currentTarget)}
        icon={<AccountIcon />}
      />
      <Menu anchor={anchor} style={{ marginTop: 35 }} onClose={setAnchor}>
        {menuItems.map(({ text, path, icon: Icon }) => (
          <Link to={path} key={path} onClick={() => setAnchor(null)}>
            <MenuItem
              style={{ minWidth: 170 }}
              icon={<Icon fontSize="small" />}
              children={text}
            />
          </Link>
        ))}
      </Menu>
    </div>
  );
}

export default withTranslation(HeaderMenu);
