import React, { useState } from 'react';
import AccountIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ForwardIcon from '@material-ui/icons/Forward';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton/IconButton';
import { useTranslation } from 'react-i18next';

export default function HeaderMenu() {
  const { t } = useTranslation();
  const [anchor, setAnchor] = useState(null);
  const menuItems = [
    { text: t('headerMenu_profile'), path: '/profile', icon: AccountIcon },
    { text: t('headerMenu_settings'), path: '/settings', icon: SettingsIcon },
    { text: t('headerMenu_logout'), path: '/logout', icon: ForwardIcon }
  ];
  return (
    <div>
      <IconButton
        color="inherit"
        children={<AccountIcon />}
        onClick={ev => setAnchor(ev.currentTarget)}
      />
      <Menu
        anchorEl={anchor}
        open={!!anchor}
        style={{ marginTop: 35 }}
        onClose={() => setAnchor(null)}
      >
        {menuItems.map(({ text, path, icon: Icon }) => (
          <Link to={path} key={path} onClick={() => setAnchor(null)}>
            <MenuItem style={{ minWidth: 170 }}>
              <ListItemIcon
                style={{ minWidth: 'auto' }}
                className="mr2"
                children={<Icon fontSize="small" />}
              />
              {text}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
