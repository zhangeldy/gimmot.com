import LoginPage from "../pages/LoginPage/LoginPage";
import { Permissions } from "./Permissions";
import MessagesPage from "../pages/MessagesPage/MessagesPage";
import PeoplesPage from "../pages/PeoplesPage/PeoplesPage";
import AdvertsPage from "../pages/AdvertsPage/AdvertsPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

const routers = {
  loginPage: {
    path: "/",
    component: LoginPage,
    withoutAuth: true
  },
  advertsPage: {
    path: "/adverts",
    component: AdvertsPage,
    withoutAuth: true,
    topTabs: true
  },
  peoplesPage: {
    path: "/peoples",
    component: PeoplesPage,
    withoutAuth: true,
    topTabs: true
  },
  messagesPage: {
    path: "/messages",
    component: MessagesPage,
    permission: Permissions.messagesPage.code,
    topTabs: true
  },
  profilePage: {
    path: "/profile",
    component: ProfilePage,
    permission: Permissions.profilePage.code
  },
  settingsPage: {
    path: "/settings",
    component: SettingsPage,
    permission: Permissions.settingsPage.code
  }
};

export const PATHS = {
  topTab: [
    routers.advertsPage.path,
    routers.peoplesPage.path,
    routers.messagesPage.path
  ]
};

export default routers;
