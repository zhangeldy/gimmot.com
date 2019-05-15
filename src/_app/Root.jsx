import React, { useEffect } from "react";
import { NotificationContainer } from "react-notifications";
import routers, { homePageRoute, tabRouters } from "../_helpers/routers";
import ProtectedRoute from "./ProtectedRoute";
import { Route, Switch } from "react-router-dom";
import { checkAuth, loginModule } from "../LoginPage/LoginDucks";
import { connect } from "react-redux";
import Page404 from "../components/Page404/Page404";
import Toolbar from "../components/Toolbar/Toolbar";
import TopTabs from "../components/TopTabs/TopTabs";
import { uef } from "../utils/uef";

const Root = ({ checkAuth, loading, user, permissions }) => {
  useEffect(uef(checkAuth), []);
  const homePagePath = homePageRoute.path;
  return (
    <>
      <NotificationContainer />
      <Toolbar homePagePath={homePagePath} />
      <div className="content content-width mt2">
        <Route path={tabRouters} render={() => <TopTabs />} />
        <Switch>
          {routers.map(route => (
            <ProtectedRoute
              {...route}
              key={route.path}
              loading={loading}
              user={user}
              permissions={permissions}
              homePagePath={homePagePath}
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
