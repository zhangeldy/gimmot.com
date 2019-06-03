import React, { useEffect } from "react";
import { NotificationContainer } from "react-notifications";
import routers, { PATHS } from "../_helpers/routers";
import RouteMap, { ProtectedRoute } from "./RouteMap";
import { Route, Switch } from "react-router-dom";
import { checkAuth, loginModule } from "../pages/LoginPage/LoginDucks";
import { connect } from "react-redux";
import Page404 from "../pages/Page404/Page404";
import Toolbar from "../components/Toolbar/Toolbar";
import TopTabs from "../components/TopTabs/TopTabs";
import { uef } from "../utils/uef";

const Root = ({ checkAuth, ...rest }) => {
  const tabsRoutes = Object.values(routers).filter(item => item.topTabs);
  const allRoutes = Object.values(routers).filter(item => !item.topTabs);
  useEffect(uef(checkAuth), []);

  return (
    <>
      <NotificationContainer />
      <Toolbar user={rest.user} />

      <div className="scroll-fix">
        <Switch>
          <Route
            path={PATHS.topTab}
            render={() => (
              <TopTabs
                user={rest.user}
                children={tabsRoutes.map(route => (
                  <ProtectedRoute exact {...route} key={route.path} {...rest} />
                ))}
              />
            )}
          />
          {allRoutes.map(route => (
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
