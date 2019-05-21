import LoginPage from "../LoginPage/LoginPage";
import { Permissions } from "./Permissions";
import MessagesPage from "../MessagesPage/MessagesPage";
import PeoplesPage from "../PeoplesPage/PeoplesPage";
import AdvertsPage from "../AdvertsPage/AdvertsPage";
import BlackListPage from "../BlackListPage/BlackListPage";
import FavoritesPage from "../FavoritesPage/FavoritesPage";
import MyAdvertsPage from "../MyAdvertsPage/MyAdvertsPage";
import PhotoAccessPage from "../PhotoAccessPage/PhotoAccessPage";
import SettingsPage from "../SettingsPage/SettingsPage";
import ProfilePage from "../ProfilePage/ProfilePage";

const routers = {
  loginPage: {
    path: "/",
    component: LoginPage,
    withoutAuth: true,
    isLoginPage: true
  },
  advertsPage: {
    path: "/adverts",
    component: AdvertsPage,
    isHomePage: true,
    withoutAuth: true
  },
  peoplesPage: {
    path: "/peoples",
    component: PeoplesPage,
    withoutAuth: true
  },
  messagesPage: {
    path: "/messages",
    component: MessagesPage,
    permission: Permissions.messagesPage.code
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
