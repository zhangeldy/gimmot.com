import React, { useEffect } from "react";
import { NotificationContainer } from "react-notifications";
import routers, { PATHS } from "../_helpers/routers";
import ProtectedRoute from "./ProtectedRoute";
import { Route, Switch } from "react-router-dom";
import { checkAuth, loginModule } from "../pages/LoginPage/LoginDucks";
import { connect } from "react-redux";
import Page404 from "../pages/Page404/Page404";
import Header from "../components/Header/Header";
import TopTabs from "../components/TopTabs/TopTabs";
import { uef } from "../utils/uef";

const Root = ({ checkAuth, ...rest }) => {
  useEffect(uef(checkAuth), []);

  return (
    <>
      <NotificationContainer />
      <Header user={rest.user} />
      <div className="scroll-fix">
        <Route
          path={PATHS.topTab}
          render={() => <TopTabs user={rest.user} />}
        />
        <Switch>
          {Object.values(routers).map(route => (
            <ProtectedRoute exact {...route} key={route.path} {...rest} />
          ))}
          <Route render={() => <Page404 />} />
        </Switch>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  user: state[loginModule].user,
  permissions: state[loginModule].permissions,
  loading: state[loginModule].loading
});

export default connect(
  mapStateToProps,
  { checkAuth }
)(Root);
