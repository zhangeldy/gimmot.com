import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AdvertIcon from "@material-ui/icons/ViewDay";
import MessageIcon from "@material-ui/icons/Forum";
import PeopleIcon from "@material-ui/icons/PersonPin";
import { CssBox } from "./MainTabsStyle";
import { history } from "../../_helpers/history";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import routers from "../../_helpers/routers";

function MainTabs({ match, user }) {
  return (
    <>
      <CssBox className="content-width">
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
            value={routers.advertsPage.path}
            to={routers.advertsPage.path}
            icon={<AdvertIcon />}
            style={{ minHeight: 40 }}
            disableFocusRipple
          />
          <Tab
            component={Link}
            value={routers.peoplesPage.path}
            to={routers.peoplesPage.path}
            icon={<PeopleIcon />}
            style={{ minHeight: 40 }}
            disableFocusRipple
          />
          <Tab
            component={Link}
            value={routers.messagesPage.path}
            to={routers.messagesPage.path}
            icon={<MessageIcon />}
            disabled={!user}
            style={{ minHeight: 40 }}
            disableFocusRipple
          />
        </Tabs>
      </CssBox>
    </>
  );
}

export default withRouter(MainTabs);
