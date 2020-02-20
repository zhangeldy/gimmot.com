import React from 'react';
import { Dialog, IconButton, withMobileDialog, Divider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useUserModal from './useUserModal';
import { useTranslation } from 'react-i18next';

const Row = ({ label, text }) => (
  <div className="clearfix my1">
    <div className="col col-6 imperceptible">{label} : </div>
    <div className="col col-6">{text}</div>
  </div>
);

function UserModal({ fullScreen }) {
  const { t } = useTranslation();
  const userModal = useUserModal();
  const user = {
    name: 'Zhangeldy',
    avatar:
      'https://scontent-frt3-1.cdninstagram.com/v/t51.2885-19/s150x150/16124354_1343066049065271_4431176462896201728_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_ohc=aKxALZaSPdQAX_a5y39&oh=f58fae0775e5c164e41b0efda7a980a4&oe=5EE9D9CC',
    is_online: true,
    is_deleted: false,
    birth_date: '24.09.1989',
    about: 'bla bla bla',
    growth: 170,
    age: 30,
    weight: 60,
    penis: 13,
    lat: 51.1879,
    lon: 71.4357,
    last_visit: '2020-02-20T17:00:34',
    hb_region: 'Астана',
    hb_ethnicity: 'asia',
    hb_body_type: 'sport',
    hb_sex_role: 'getereo',
    hb_family_status: 'Женат'
  };

  return (
    <Dialog
      open={userModal.isOpen}
      onClose={userModal.close}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
    >
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <IconButton onClick={userModal.close} children={<CloseIcon />} />
      </div>
      <div className="p3">
        <div className="flex flex-wrap justify-center">
          <img
            className="circle"
            width="150"
            height="150"
            src={user.avatar}
            alt={user.name}
          />
          <div className="ml3 fullwidth" style={{ maxWidth: 650 }}>
            <div className="fs-large mb2">{user.name}</div>
            <Divider style={{ marginBottom: 15 }} />
            <Row label={'Регион'} text={user.hb_region} />
            <Row label={'День рождения'} text={user.birth_date} />
            <Row label={'Рост / Вес / Размер'} text={`${user.growth}см / ${user.weight}кг / ${user.penis}см`}/>
            <Row label={'Роль'} text={user.hb_sex_role}/>
            <Row label={'Телосложение'} text={user.hb_body_type}/>
            <Row label={'Этническая принадлежность'} text={user.hb_ethnicity}/>
            <Row label={'Семейное положение'} text={user.hb_family_status}/>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default withMobileDialog()(UserModal);
