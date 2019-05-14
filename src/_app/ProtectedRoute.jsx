import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authModule } from "../Auth/AuthDucks";
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
        return <div>loading...</div>;
      }

      // перенаправляем если не авторизован
      if (!rest.withoutAuth && rest.user === null) {
        return <Redirect to="/login" />;
      }

      // перенаправляем если авторизован
      if (rest.user && rest.path === "/login") {
        return <Redirect to="/" />;
      }

      if (rest.permission && !rest.userPermissions.includes(rest.permission)) {
        return <div>access denied</div>
      }

      return <Content {...props} routeProps={routeProps} />;
    }}
  />
);

const mapStateToProps = state => ({
  user: state[authModule].user,
  userPermissions: state[authModule].permissions,
  loading: state[authModule].loading
});

export default connect(mapStateToProps)(ProtectedRoute);
