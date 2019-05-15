import LoginPage from "../LoginPage/LoginPage";
import HomePage from "../HomePage/HomePage";
import { Permissions } from "./Permissions";
import MessagesPage from "../MessagesPage/MessagesPage";


const routers = [
  {
    path: "/",
    textCode: "homePage",
    component: HomePage,
    withoutAuth: true,
    exact: true,
  },
  {
    path: "/login",
    textCode: "loginPage",
    component: LoginPage,
    withoutAuth: true,
    exact: true
  },
  {
    path: "/messages",
    textCode: "messagesPage",
    component: MessagesPage,
    permission: Permissions.messagesPage.code,
    exact: true
  }
];

export default routers;
