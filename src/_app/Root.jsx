import React, { useEffect } from "react";
import { NotificationContainer } from "react-notifications";
import routerProps, { PATHS } from "../_helpers/routerProps";
import ProtectedRoute from "./ProtectedRoute";
import { Route, Switch } from "react-router-dom";
import { checkAuth, loginModule } from "../pages/LoginPage/LoginDucks";
import { connect } from "react-redux";
import Page404 from "../pages/Page404/Page404";
import Header from "../components/Header/Header";
import MainTabs from "../components/MainTabs/MainTabs";
import { uef } from "../utils/uef";
import paths from "../_helpers/paths";

const Root = ({ checkAuth, ...rest }) => {
  useEffect(uef(checkAuth), []);

  return (
    <>
      <NotificationContainer />
      <Header user={rest.user} />

      <div className="scroll-fix">
        <div className="content">
          <Route
            path={[paths.advertsPage, paths.peoplesPage, paths.messagesPage]}
            render={() => <MainTabs user={rest.user} />}
          />
          <Switch>
            <ProtectedRoute exact {...rest} {...routerProps.loginPage}/>
            <ProtectedRoute exact {...rest} {...routerProps.advertsPage}/>
            <ProtectedRoute exact {...rest} {...routerProps.peoplesPage}/>
            <ProtectedRoute exact {...rest} {...routerProps.messagesPage}/>
            <ProtectedRoute exact {...rest} {...routerProps.profilePage}/>
            <ProtectedRoute exact {...rest} {...routerProps.settingsPage}/>
            <Route render={() => <Page404 />} />
          </Switch>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  user: state[loginModule].user,
  userPermissions: state[loginModule].permissions,
  loading: state[loginModule].loading
});

export default connect(
  mapStateToProps,
  { checkAuth }
)(Root);
