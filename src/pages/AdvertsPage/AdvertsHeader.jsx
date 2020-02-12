import React, { useState } from 'react';
import StarIcon from '@material-ui/icons/GradeOutlined';
import StarActiveIcon from '@material-ui/icons/Grade';
import FilterIcon from '@material-ui/icons/FilterList';
import AdvertActiveIcon from '@material-ui/icons/CalendarViewDay';
import AdvertIcon from '@material-ui/icons/CalendarViewDayOutlined';
import AdvertAdd from './AdvertAdd';
import { useTranslation } from 'react-i18next';
import { Tooltip, IconButton, Button, Paper } from '@material-ui/core';

export default function AdvertsHeader() {
  const { t } = useTranslation();
  const [addModal, setAddModal] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <Paper className="flex justify-between my2 p1">
      <Button children={t('advert_addAdvert')} onClick={() => setAddModal(true)} />
      <div className="flex">
        {!active && (
          <Tooltip title={t('advert_filter')}>
            <IconButton children={<FilterIcon />} />
          </Tooltip>
        )}
        <Tooltip title={t('advert_favorites')}>
          <IconButton
            color={active === 'favorites' ? 'primary' : 'default'}
            children={active === 'favorites' ? <StarActiveIcon /> : <StarIcon />}
            onClick={() => setActive(active !== 'favorites' ? 'favorites' : null)}
          />
        </Tooltip>
        <Tooltip title={t('advert_myAdverts')}>
          <IconButton
            children={active === 'myAdverts' ? <AdvertActiveIcon /> : <AdvertIcon />}
            onClick={() => setActive(active !== 'myAdverts' ? 'myAdverts' : null)}
            color={active === 'myAdverts' ? 'primary' : 'default'}
          />
        </Tooltip>
      </div>
      <AdvertAdd open={addModal} onClose={() => setAddModal(false)} />
    </Paper>
  );
}
