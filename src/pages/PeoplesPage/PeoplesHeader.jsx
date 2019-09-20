import React, { useState } from 'react';
import FilterIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import withTranslation from '../../components/_hoc/withTranslation';
import IconButton from '../../_ui/Button/IconButton';
import { Header } from './PeoplesStyle';
import { styles } from "../../components/ThemeProvider/Styles";
import StarActiveIcon from "@material-ui/icons/Grade";
import StarIcon from "@material-ui/icons/GradeOutlined";

function PeoplesHeader({ t }) {
  const [favorites, setFavorites] = useState(false);
  return (
    <Header>
      <div className="search">
        <SearchIcon style={{ color: styles.textSecondary }}/>
        <input className="textPrimary" placeholder="Поиск" />
      </div>
      <div>
        <IconButton
          tooltip={t("advertsFilter_favorites")}
          style={{ padding: 5, marginLeft: 5 }}
          onClick={() => setFavorites(!favorites)}
          color={favorites ? "primary" : "default"}
          icon={favorites ? <StarActiveIcon /> : <StarIcon />}
        />
        <IconButton
          tooltip={t('advertsFilter_filter')}
          style={{ padding: 5, marginLeft: 5 }}
          icon={<FilterIcon />}
        />
      </div>
    </Header>
  );
}

export default withTranslation(PeoplesHeader);
