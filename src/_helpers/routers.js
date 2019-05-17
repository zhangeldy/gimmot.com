import LoginPage from "../LoginPage/LoginPage";
import { Permissions } from "./Permissions";
import MessagesPage from "../MessagesPage/MessagesPage";
import PeoplesPage from "../PeoplesPage/PeoplesPage";
import AdvertsPage from "../AdvertsPage/AdvertsPage";

const routers = [
  {
    path: "/",
    textCode: "loginPage",
    component: LoginPage,
    withoutAuth: true,
    isLoginPage: true,
    exact: true
  },
  {
    path: "/adverts",
    textCode: "advertsPage",
    component: AdvertsPage,
    isHomePage: true,
    withoutAuth: true,
    withTopTab: true,
    exact: true
  },
  {
    path: "/peoples",
    textCode: "peoplesPage",
    component: PeoplesPage,
    withoutAuth: true,
    withTopTab: true,
    exact: true
  },
  {
    path: "/messages",
    textCode: "messagesPage",
    component: MessagesPage,
    permission: Permissions.messagesPage.code,
    withTopTab: true,
    exact: true
  }
];

export const PATHS = {
  topTab: routers.filter(item => item.withTopTab).map(item => item.path),
  homePage: routers.find(item => item.isHomePage).path,
  loginPage: routers.find(item => item.isLoginPage).path
};

export default routers;
