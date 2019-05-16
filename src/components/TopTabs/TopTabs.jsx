import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AdvertIcon from "@material-ui/icons/ViewDay";
import MessageIcon from "@material-ui/icons/Forum";
import PeopleIcon from "@material-ui/icons/PersonPin";
import { CssBox } from "./TopTabsStyle";
import { history } from "../../_helpers/store";
import { withRouter } from "react-router-dom";

function TopTabs({ match }) {
  return (
    <CssBox className="content-width mt2">
      <Tabs
        value={match.path}
        onChange={(ev, path) => history.push(path)}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab value="/adverts" icon={<AdvertIcon />} />
        <Tab value="/peoples" icon={<PeopleIcon />} />
        <Tab value="/messages" icon={<MessageIcon />} />
      </Tabs>
    </CssBox>
  );
}

export default withRouter(TopTabs);
