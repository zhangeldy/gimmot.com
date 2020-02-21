import React from 'react';
import { Dialog, IconButton, withMobileDialog, Divider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useUserModal from './useUserModal';
import { useTranslation } from 'react-i18next';
import { PinDrop, Person, Favorite } from '@material-ui/icons';
import SearchIcon from './SearchIcon';
import Marks from '../Marks/Marks';

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
    region: 'Астана',
    ethnicity: 'Азиат',
    sex_role: 'Пассив',
    family_status: 'Состою в браке',
    marks: ['Хочу сейчас', 'С местом', 'На машине'],
    purpose: ['Переписка', 'Дружба', 'Отношение', 'Секс']
  };
  const params = [
    user.ethnicity,
    `${user.growth}см`,
    `${user.weight}кг`,
    `${user.penis}см`
  ];

  return (
    <Dialog
      open={userModal.isOpen}
      onClose={userModal.close}
      fullScreen={fullScreen}
      PaperProps={{ style: { maxWidth: 520 } }}
      fullWidth
    >
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <IconButton onClick={userModal.close} children={<CloseIcon />} />
      </div>
      <div className="p3">
        <div className="flex flex-wrap ">
          <img
            className="circle mb3"
            width="150"
            height="150"
            src={user.avatar}
            alt={user.name}
          />
          <div className="" style={{ maxWidth: 270, width: '100%', marginLeft: fullScreen ? 0 : 30 }}>
            <div className="">
              <span className="fs-large mr1">{user.name}</span>
              <span className="imperceptible">
                {user.age}, {user.sex_role}
              </span>
            </div>
            <div className="imperceptible fs-small" style={{ margin: '5px 0' }}>
              Заходил 18 фев в 12:31
            </div>
            <Divider style={{ marginBottom: 10 }} />
            <div className="flex items-center my1">
              <PinDrop color="action" fontSize="small" />
              <div className="ml1">
                {user.region} <span className="imperceptible">1.5 км</span>
              </div>
            </div>
            <div className="flex items-center my1">
              <Person color="action" fontSize="small" />
              <div className="ml1">{params.join(', ')}</div>
            </div>
            <div className="flex items-center my1">
              <Favorite color="action" style={{ fontSize: 16, margin: '1.5px' }} />
              <div className="ml1">{user.family_status}</div>
            </div>
            <div className="flex items-center my1">
              <SearchIcon />
              <div className="ml1">{user.purpose.join(', ')}</div>
            </div>
            <Marks data={user.marks} className="my2" />
          </div>
        </div>
        <div>
          Описание Описание Описание Описание Описание Описание Описание Описание Описание
          Описание Описание Описание Описание Описание
        </div>
        <div>Написать, В избранное</div>
        <div>photos</div>
      </div>
    </Dialog>
  );
}

export default withMobileDialog()(UserModal);
