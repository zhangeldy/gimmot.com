import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import Row from '../../components/Row';
import CloseIcon from '@material-ui/icons/Close';
import {
  TextField,
  withMobileDialog,
  Dialog,
  Button,
  IconButton
} from '@material-ui/core';

const Field = ({ label, name, register, ...rest }) => (
  <Row label={label}>
    <TextField
      {...rest}
      name={name}
      inputProps={{ ref: register({ required: true, maxLength: 50 }) }}
    />
  </Row>
);

function AdvertAddModal({ open, onClose, fullScreen }) {
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Dialog open={open} onClose={onClose} fullScreen={fullScreen} maxWidth="sm" fullWidth>
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <IconButton onClick={onClose} children={<CloseIcon />} />
      </div>
      <div className="p3">
        <div className="fs-large mb2">Новое объявление</div>
        <form onSubmit={handleSubmit(onSubmit)} className="pr3">
          <Field label={t('advertAdd_name')} name="name" register={register} />
          <Field label={t('advertAdd_age')} name="age" register={register} />
          <Field label={t('advertAdd_country')} name="country" register={register} />
          <Field label={t('advertAdd_role')} name="role" register={register} />
          <Field label={t('advertAdd_params')} name="params" register={register} />
          <Field
            label={t('advertAdd_text')}
            name="text"
            register={register}
            multiline
            rows={2}
            rowsMax={10}
          />
          <div className="right-align mt1">
            <Button type="submit" children={t('advertAdd_publish')} />
          </div>
        </form>
      </div>
    </Dialog>
  );
}

export default withMobileDialog()(AdvertAddModal);
