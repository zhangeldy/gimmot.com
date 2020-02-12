import React, { useState } from 'react';
import FilterIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import { Header } from './PeoplesStyle';
import { styles } from '../../components/ThemeProvider/Styles';
import StarActiveIcon from '@material-ui/icons/Grade';
import StarIcon from '@material-ui/icons/GradeOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton/IconButton';
import { useTranslation } from 'react-i18next';

export default function PeoplesHeader() {
  const { t } = useTranslation();
  const [favorites, setFavorites] = useState(false);
  return (
    <Header>
      <div className="search">
        <SearchIcon style={{ color: styles.textSecondary }} />
        <input className="textPrimary" placeholder="Поиск" />
      </div>
      <div>
        <Tooltip title={t('peoples_favorites')}>
          <IconButton
            onClick={() => setFavorites(!favorites)}
            color={favorites ? 'primary' : 'default'}
            children={favorites ? <StarActiveIcon /> : <StarIcon />}
          />
        </Tooltip>
        <Tooltip title={t('peoples_filter')}>
          <IconButton children={<FilterIcon />} />
        </Tooltip>
      </div>
    </Header>
  );
}
