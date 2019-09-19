import React from 'react';
import FilterIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import withTranslation from '../../components/_hoc/withTranslation';
import IconButton from '../../_ui/Button/IconButton';
import { Header } from './PeoplesStyle';
import { styles } from "../../components/ThemeProvider/Styles";

function PeoplesHeader({ t }) {
  return (
    <Header>
      <div className="search">
        <SearchIcon style={{ color: styles.textSecondary }}/>
        <input className="textPrimary" placeholder="Поиск" />
      </div>
      <IconButton
        tooltip={t('advertsFilter_filter')}
        style={{ padding: 5, marginLeft: 5 }}
        icon={<FilterIcon />}
      />
    </Header>
  );
}

export default withTranslation(PeoplesHeader);
