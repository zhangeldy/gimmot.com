import React, { useEffect } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import withTranslation from "../_hoc/withTranslation";
import routers from "../_helpers/routers";
import ProtectedRoute from "./ProtectedRoute";
import { Route, Switch } from "react-router-dom";
import { checkAuth } from "../Auth/AuthDucks";
import { connect } from "react-redux";

const Root = ({ checkAuth }) => {
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <>
      <NotificationContainer />
      <div>
        <Switch>
          {routers.map(route => (
            <ProtectedRoute key={route.path} {...route} />
          ))}
          <Route render={() => <div>Упс страница не найдена</div>} />
        </Switch>
      </div>
    </>
  );
};

export default compose(
  withRouter,
  withTranslation,
  connect(null, { checkAuth })
)(Root);
