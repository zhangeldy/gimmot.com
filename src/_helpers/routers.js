import LoginPage from "../LoginPage/LoginPage";
import HomePage from "../HomePage/HomePage";
import { Permissions } from "./Permissions";


const routers = [
  {
    path: "/",
    textCode: "Главная",
    component: HomePage,
    withoutAuth: true,
    exact: true,
    permission: Permissions.homePage.code
  },
  {
    path: "/login",
    textCode: "Авторизация",
    component: LoginPage,
    withoutAuth: true,
    permission: Permissions.loginPage.code,
    exact: true
  }
];

export default routers;
