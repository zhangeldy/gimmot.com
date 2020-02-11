import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

function AdvertAdd({ open, onClose, fullScreen }) {
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={onClose} fullScreen={fullScreen}>
      <div className="p3">
        <div className="fs-large mb2">Новое объявление</div>
        {/*<Form onSubmit={console.log}>*/}
        <div className="flex">
          {/*<Input name="name" label="Псевдоним" style={{ marginRight: 10 }} />*/}
          {/*<Input name="age" label="Возраст" />*/}
        </div>
        <div>
          {/*<Input name="country" label="Город" />*/}
          {/*<Input name="role" label="Роль" />*/}
          {/*<Input name="params" label="Рост/Вес/Размер" />*/}
        </div>
        <div>
          {/*<Input name="text" label="Текст" multiline rows={2} rowsMax={2} />*/}
        </div>
        <div className="right-align mt1">
          <Button variant="contained" color="primary" children={t('advert_add')} />
        </div>
        {/*</Form>*/}
      </div>
    </Dialog>
  );
}

export default withMobileDialog()(AdvertAdd);
