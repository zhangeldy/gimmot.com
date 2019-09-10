import React from "react";
import { Route, Redirect } from "react-router-dom";
import PageLoader from "../components/PageLoader/PageLoader";
import Page403 from "../pages/Page403/Page403";
import paths from "../_helpers/paths";

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={routeProps => {
      if (rest.withoutAuth && rest.path !== paths.loginPage) {
        return <Component {...routeProps} />;
      }

      if (rest.loading) {
        return <PageLoader />;
      }

      // перенаправляем если не авторизован
      if (!rest.withoutAuth && rest.user === null) {
        return <Redirect to={paths.loginPage} />;
      }

      // перенаправляем если авторизован
      if (rest.user && rest.path === paths.loginPage) {
        return <Redirect to={paths.advertsPage} />;
      }

      // проверяем доступ к странице
      if (
        rest.permissions &&
        !rest.userPermissions.some(item => rest.permissions.includes(item))
      ) {
        return <Page403 />;
      }

      return <Component {...routeProps} />;
    }}
  />
);

export default ProtectedRoute
