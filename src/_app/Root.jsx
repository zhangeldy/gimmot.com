import React, { useEffect } from 'react';
import NotificationContainer from 'react-notifications-component';
import routerProps from '../_helpers/routerProps';
import ProtectedRoute from './ProtectedRoute';
import { Route, Switch } from 'react-router-dom';
import { checkAuth } from '../pages/LoginPage/LoginDucks';
import { useDispatch } from 'react-redux';
import Page404 from '../pages/Page404/Page404';
import Header from '../components/Header/Header';
import MainTabs from '../components/MainTabs/MainTabs';
import paths from '../_helpers/paths';
import UserModal from '../components/UserModal/UserModal';

export default function Root() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  return (
    <>
      <NotificationContainer />
      <Header />
      <UserModal />

      <div className="scroll-fix">
        <div className="content pb2">
          <Route
            path={[paths.advertsPage, paths.peoplesPage, paths.messagesPage]}
            render={() => <MainTabs />}
          />
          <Switch>
            <ProtectedRoute exact {...routerProps.loginPage} />
            <ProtectedRoute exact {...routerProps.advertsPage} />
            <ProtectedRoute exact {...routerProps.peoplesPage} />
            <ProtectedRoute exact {...routerProps.messagesPage} />
            <ProtectedRoute exact {...routerProps.profilePage} />
            <ProtectedRoute exact {...routerProps.settingsPage} />
            <Route render={() => <Page404 />} />
          </Switch>
        </div>
      </div>
    </>
  );
}
