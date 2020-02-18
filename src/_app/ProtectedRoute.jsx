import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PageLoader from '../components/PageLoader/PageLoader';
import Page403 from '../pages/Page403/Page403';
import paths from '../_helpers/paths';
import { useSelector } from 'react-redux';
import { loginModule } from '../pages/LoginPage/LoginDucks';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const loading = useSelector(state => state[loginModule].loading);
  const userPermissions = useSelector(state => state[loginModule].permissions);

  return (
    <Route
      {...rest}
      render={routeProps => {
        if (rest.withoutAuth && rest.path !== paths.loginPage) {
          return <Component {...routeProps} />;
        }

        if (loading) {
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
          !userPermissions.some(item => rest.permissions.includes(item))
        ) {
          return <Page403 />;
        }

        return <Component {...routeProps} />;
      }}
    />
  );
};

export default ProtectedRoute;
