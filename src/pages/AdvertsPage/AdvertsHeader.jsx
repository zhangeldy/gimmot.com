import React, { useState } from 'react';
import StarIcon from '@material-ui/icons/GradeOutlined';
import StarActiveIcon from '@material-ui/icons/Grade';
import FilterIcon from '@material-ui/icons/FilterList';
import AdvertActiveIcon from '@material-ui/icons/CalendarViewDay';
import AdvertIcon from '@material-ui/icons/CalendarViewDayOutlined';
import AdvertAdd from './AdvertAdd';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MuiIconButton from '@material-ui/core/IconButton/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { useTranslation } from 'react-i18next';

export default function AdvertsHeader() {
  const { t } = useTranslation();
  const [addModal, setAddModal] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <Paper className="flex justify-between my2 p1">
      <Button
        size="small"
        variant="contained"
        color="primary"
        children={t('advert_addAdvert')}
        onClick={() => setAddModal(true)}
      />
      <div className="flex">
        {!active && (
          <Tooltip title={t('advert_filter')} placement="top" className="right">
            <MuiIconButton
              style={{ padding: 5, marginLeft: 5 }}
              children={<FilterIcon />}
            />
          </Tooltip>
        )}
        <Tooltip title={t('advert_favorites')} placement="top" className="right">
          <MuiIconButton
            style={{ padding: 5, marginLeft: 5 }}
            color={active === 'favorites' ? 'primary' : 'default'}
            children={active === 'favorites' ? <StarActiveIcon /> : <StarIcon />}
            onClick={() => setActive(active !== 'favorites' ? 'favorites' : null)}
          />
        </Tooltip>
        <Tooltip title={t('advert_myAdverts')} placement="top" className="right">
          <MuiIconButton
            style={{ padding: 5, marginLeft: 5 }}
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
