import React from "react";
import { Route, Redirect } from "react-router-dom";
import PageLoader from "../components/PageLoader/PageLoader";
import Page403 from "../components/Page403/Page403";
import routers from "../_helpers/routers";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={routeProps => {
      if (rest.withoutAuth && rest.path !== routers.loginPage.path) {
        return (
          <div className="content content-width">
            <Component {...routeProps} />
          </div>
        );
      }

      if (rest.loading) {
        return <PageLoader />;
      }

      // перенаправляем если не авторизован
      if (!rest.withoutAuth && rest.user === null) {
        return <Redirect to={routers.loginPage.path} />;
      }

      // перенаправляем если авторизован
      if (rest.user && rest.path === routers.loginPage.path) {
        return <Redirect to={routers.advertsPage.path} />;
      }

      if (rest.permission && !rest.permissions.includes(rest.permission)) {
        return <Page403 />;
      }

      return (
        <div className="content content-width">
          <Component {...routeProps} />
        </div>
      );
    }}
  />
);

export default ProtectedRoute;
