import LoginPage from '../pages/LoginPage/LoginPage';
import permissions from './permissions';
import MessagesPage from '../pages/MessagesPage/MessagesPage';
import PeoplesPage from '../pages/PeoplesPage/PeoplesPage';
import AdvertsPage from '../pages/AdvertsPage/AdvertsPage';
import SettingsPage from '../pages/SettingsPage/SettingsPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import paths from './paths';

const routerProps = {
  loginPage: {
    path: paths.loginPage,
    component: LoginPage,
    withoutAuth: true,
  },
  advertsPage: {
    path: paths.advertsPage,
    component: AdvertsPage,
    withoutAuth: true,
  },
  peoplesPage: {
    path: paths.peoplesPage,
    component: PeoplesPage,
    withoutAuth: true,
  },
  messagesPage: {
    path: paths.messagesPage,
    component: MessagesPage,
    permission: [permissions.messagesPage],
  },
  profilePage: {
    path: paths.profilePage,
    component: ProfilePage,
    permission: [permissions.profilePage],
  },
  settingsPage: {
    path: paths.settingsPage,
    component: SettingsPage,
    permission: [permissions.settingsPage],
  },
};

export default routerProps;
