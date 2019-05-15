import LoginPage from "../LoginPage/LoginPage";
import HomePage from "../HomePage/HomePage";
import { Permissions } from "./Permissions";
import MessagesPage from "../MessagesPage/MessagesPage";
import PeoplesPage from "../PeoplesPage/PeoplesPage";
import AdvertsPage from "../AdvertsPage/AdvertsPage";

const routers = [
  {
    path: "/login",
    textCode: "loginPage",
    component: LoginPage,
    withoutAuth: true,
    exact: true
  },
  {
    path: "/",
    textCode: "advertsPage",
    component: AdvertsPage,
    isHomePage: true,
    permission: Permissions.advertsPage.code,
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
  },
  {
    path: "/peoples",
    textCode: "peoplesPage",
    component: PeoplesPage,
    permission: Permissions.peoplesPage.code,
    withTopTab: true,
    exact: true
  }
];

export const tabRouters = routers.filter(item => item.withTopTab).map(item => item.path);

export const homePageRoute = routers.find(item => item.isHomePage);

export default routers;
