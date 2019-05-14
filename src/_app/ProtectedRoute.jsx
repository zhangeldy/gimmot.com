import React from "react";
import { Route, Redirect } from "react-router-dom";
import Content from "./Content";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={routeProps => {
      const props = { component: Component, ...rest };

      if (rest.withoutAuth) {
        return <Content {...props} routeProps={routeProps} />;
      }

      if (rest.loading) {
        return <div>паждите...</div>;
      }

      // перенаправляем если не авторизован
      if (!rest.withoutAuth && rest.user === null) {
        return <Redirect to="/login" />;
      }

      // перенаправляем если авторизован
      if (rest.user && rest.path === "/login") {
        return <Redirect to="/" />;
      }

      if (rest.permission && !rest.permissions.includes(rest.permission)) {
        return <div>доступ запрещен</div>;
      }

      return <Content {...props} routeProps={routeProps} />;
    }}
  />
);

export default ProtectedRoute;
