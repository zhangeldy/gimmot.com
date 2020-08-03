import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AdvertIcon from '@material-ui/icons/ViewDay';
import MessageIcon from '@material-ui/icons/Forum';
import PeopleIcon from '@material-ui/icons/PersonPin';
import { Wrapper } from './MainTabsStyle';
import { withRouter } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import paths from '../../_helpers/paths';
import { useSelector } from 'react-redux';
import { loginModule } from '../../pages/LoginPage/LoginDucks';

function MainTabs({ match }) {
  const history = useHistory();
  const user = useSelector((state) => state[loginModule].user);
  return (
    <Wrapper>
      <Tabs
        value={match.path}
        onChange={(ev, path) => history.push(path)}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        style={{ minHeight: 40 }}
      >
        <Tab
          component={Link}
          value={paths.advertsPage}
          to={paths.advertsPage}
          icon={<AdvertIcon />}
          style={{ minHeight: 40 }}
          disableFocusRipple
        />
        <Tab
          component={Link}
          value={paths.peoplesPage}
          to={paths.peoplesPage}
          icon={<PeopleIcon />}
          style={{ minHeight: 40 }}
          disableFocusRipple
        />
        <Tab
          component={Link}
          value={paths.messagesPage}
          to={paths.messagesPage}
          icon={<MessageIcon />}
          disabled={!user}
          style={{ minHeight: 40 }}
          disableFocusRipple
        />
      </Tabs>
    </Wrapper>
  );
}

export default withRouter(MainTabs);
