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

export const tabRouters = routers.filter(item => item.withTopTab).map(item => item.path);

export const homePageRoute = routers.find(item => item.isHomePage);

export const loginPageRoute = routers.find(item => item.isLoginPage);

export default routers;
