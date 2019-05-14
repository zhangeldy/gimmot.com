import React, { useEffect } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import withTranslation from "../_hoc/withTranslation";
import routers from "../_helpers/routers";
import ProtectedRoute from "./ProtectedRoute";
import { Route, Switch } from "react-router-dom";
import { checkAuth, loginModule } from "../LoginPage/LoginDucks";
import { connect } from "react-redux";

const Root = ({ checkAuth, loading, user, permissions }) => {
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <>
      <NotificationContainer />
      <div>
        <Switch>
          {routers.map(route => (
            <ProtectedRoute
              {...route}
              key={route.path}
              loading={loading}
              user={user}
              permissions={permissions}
            />
          ))}
          <Route render={() => <div>Упс страница не найдена</div>} />
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

export default compose(
  withRouter,
  withTranslation,
  connect(
    mapStateToProps,
    { checkAuth }
  )
)(Root);
