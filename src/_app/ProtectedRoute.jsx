import React from "react";
import { Route, Redirect } from "react-router-dom";
import PageLoader from "../components/PageLoader/PageLoader";
import Page403 from "../components/Page403/Page403";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={routeProps => {
      if (rest.withoutAuth && rest.path !== rest.loginPagePath) {
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
        return <Redirect to={rest.loginPagePath} />;
      }

      // перенаправляем если авторизован
      if (rest.user && rest.path === rest.loginPagePath) {
        return <Redirect to={rest.homePagePath} />;
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
