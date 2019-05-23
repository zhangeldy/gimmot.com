import React, { useEffect } from "react";
import { NotificationContainer } from "react-notifications";
import routers, { PATHS } from "../_helpers/routers";
import ProtectedRoute from "./ProtectedRoute";
import { Route, Switch } from "react-router-dom";
import { checkAuth, loginModule } from "../pages/LoginPage/LoginDucks";
import { connect } from "react-redux";
import Page404 from "../pages/Page404/Page404";
import Toolbar from "../components/Toolbar/Toolbar";
import TopTabs from "../components/TopTabs/TopTabs";
import { uef } from "../utils/uef";

const Root = ({ checkAuth, loading, user, permissions }) => {
  useEffect(uef(checkAuth), []);
  return (
    <>
      <NotificationContainer />
      <Toolbar user={user} />
      <div style={{ width: 'calc(100vw - 20px)'}}>
        <Route path={PATHS.topTab} render={() => <TopTabs user={user} />} />
        <Switch>
          {Object.values(routers).map(route => (
            <ProtectedRoute
              exact
              {...route}
              key={route.path}
              loading={loading}
              user={user}
              permissions={permissions}
            />
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
