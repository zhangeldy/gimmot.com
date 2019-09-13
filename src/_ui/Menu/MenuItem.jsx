import React from 'react';
import MuiMenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

function MenuItem({ icon, children, text, ...rest }) {
  return (
    <MuiMenuItem {...rest}>
      {icon && (
        <ListItemIcon
          style={{ minWidth: 'auto' }}
          className="mr2"
          children={icon}
        />
      )}
      {text || children}
    </MuiMenuItem>
  );
}

export default MenuItem;
