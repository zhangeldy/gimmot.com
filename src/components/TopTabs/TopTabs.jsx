import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MessageIcon from "@material-ui/icons/Message";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { CssBox } from "./TopTabsStyle";
import { history } from "../../_helpers/store";
import { withRouter } from "react-router-dom";

function TopTabs({ match }) {
  console.log(match)
  return (
    <CssBox>
      <Tabs
        value={match.path}
        onChange={(ev, path) => history.push(path)}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab value="/" icon={<MessageIcon />} />
        <Tab value="/peoples" icon={<PersonPinIcon />} />
        <Tab value="/messages" icon={<PersonPinIcon />} />
      </Tabs>
    </CssBox>
  );
}

export default withRouter(TopTabs);
