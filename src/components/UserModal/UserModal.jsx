import React, { useState } from 'react';
import {
  Button,
  Dialog,
  IconButton,
  TextField,
  withMobileDialog
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useUserQuery from '../_hooks/useUserQuery';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

function UserModal({ fullScreen }) {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const query = useUserQuery();
  const history = useHistory();
  const { pathname } = useLocation();
  const onClose = () => {
    query.delete('user');
    history.replace(`${pathname}?${query.toString()}`);
  };
  const onSubmit = data => console.log(data);

  return (
    <Dialog
      open={!!query.get('user')}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="sm"
      fullWidth
    >
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <IconButton onClick={onClose} children={<CloseIcon />} />
      </div>
      <div className="p3">
        <div className="fs-large mb2">Новое объявление</div>
        <form onSubmit={handleSubmit(onSubmit)} className="pr3">
          <div className="right-align mt1">
            <Button type="submit" children={t('advertAdd_publish')} />
          </div>
        </form>
      </div>
    </Dialog>
  );
}

export default withMobileDialog()(UserModal);
