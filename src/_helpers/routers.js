import React from "react";
import LoginPage from "../LoginPage/LoginPage";
import HomePage from "../HomePage/HomePage";

/*
{
  path: "/menu",
  text: 'Авторизация',
  component: Test,
  permissions: [Roles.ADMIN],
  withoutAuth: true,
  sideBarItem: false,
  hideSideBar:false
  exact: true
}
*/

const routers = [
  {
    path: "/",
    text: "Главная",
    component: HomePage,
    exact: true
  },
  {
    path: "/login",
    text: "Авторизация",
    component: LoginPage,
    withoutAuth: true,
    hideSideBar: true,
    exact: true
  }
];

export default routers;
