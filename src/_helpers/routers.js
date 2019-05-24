import LoginPage from "../pages/LoginPage/LoginPage";
import { Permissions } from "./Permissions";
import MessagesPage from "../pages/MessagesPage/MessagesPage";
import PeoplesPage from "../pages/PeoplesPage/PeoplesPage";
import AdvertsPage from "../pages/AdvertsPage/AdvertsPage";
import BlackListPage from "../pages/BlackListPage/BlackListPage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import MyAdvertsPage from "../pages/MyAdvertsPage/MyAdvertsPage";
import PhotoAccessPage from "../pages/PhotoAccessPage/PhotoAccessPage";
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
  blacklistPage: {
    path: "/blacklist",
    component: BlackListPage,
    permission: Permissions.blackListPage.code
  },
  favoritesPage: {
    path: "/favorites",
    component: FavoritesPage,
    permission: Permissions.favoritesPage.code
  },
  myAdvertsPage: {
    path: "/myAdverts",
    component: MyAdvertsPage,
    permission: Permissions.myAdvertsPage.code
  },
  photoAccessPage: {
    path: "/photoAccess",
    component: PhotoAccessPage,
    permission: Permissions.photoAccessPage.code
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
