import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Input from '../../_ui/Input/Input';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Form from '../../_ui/Form/Form';
import Button from '../../_ui/Button/Button';
import { compose } from 'redux';
import withTranslation from '../../components/_hoc/withTranslation';

function AdvertAdd({ open, onClose, fullScreen, t }) {
  return (
    <Dialog open={open} onClose={onClose} fullScreen={fullScreen}>
      <div className="p3">
        <Form onSubmit={console.log}>
          <div className="fs-large">Новое объявление</div>
          <div className="flex">
            <Input name="name" label="Псевдоним" style={{ marginRight: 10 }} />
            <Input name="age" label="Возраст" />
          </div>
          <div>
            <Input name="country" label="Город" />
            <Input name="role" label="Роль" />
            <Input name="params" label="Рост/Вес/Размер" />
          </div>
          <div>
            <Input name="text" label="Текст" multiline rows={2} />
          </div>
          <div className="right-align mt1">
            <Button text={t('advertAdd_addBtn')} />
          </div>
        </Form>
      </div>
    </Dialog>
  );
}

export default compose(
  withMobileDialog(),
  withTranslation,
)(AdvertAdd);
