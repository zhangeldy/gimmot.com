import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AdvertIcon from "@material-ui/icons/ViewDay";
import MessageIcon from "@material-ui/icons/Forum";
import PeopleIcon from "@material-ui/icons/PersonPin";
import { CssBox } from "./TopTabsStyle";
import { history } from "../../_helpers/store";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function TopTabs({ match, user }) {
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
            value="/adverts"
            to="/adverts"
            icon={<AdvertIcon />}
            style={{ minHeight: 40 }}
          />
          <Tab
            component={Link}
            value="/peoples"
            to="/peoples"
            icon={<PeopleIcon />}
            style={{ minHeight: 40 }}
          />
          <Tab
            component={Link}
            value="/messages"
            to="/messages"
            icon={<MessageIcon />}
            disabled={!user}
            style={{ minHeight: 40 }}
          />
        </Tabs>
      </CssBox>
    </>
  );
}

export default withRouter(TopTabs);
