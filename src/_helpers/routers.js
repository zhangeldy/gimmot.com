import React from "react";
import LoginPage from "../LoginPage/LoginPage";
import SideBar from "../SideBar/SideBar";
import UserManagePage from "../UserManagePage/UserManagePage";
import UserEdit from "../Users/UserEdit";
import RoleEdit from "../Roles/RoleEdit2";
import BaseStationPage from "../BaseStationPage/BaseStationPage";
import Map from "@material-ui/icons/Map";
import People from "@material-ui/icons/People";
import Assessment from "@material-ui/icons/Assessment";
import SettingsInputAntenna from "@material-ui/icons/SettingsInputAntenna";


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
    component: SideBar,
    exact: true
  },
  {
    path: "/login",
    text: "Авторизация",
    component: LoginPage,
    withoutAuth: true,
    hideSideBar: true,
    exact: true
  },
  {
    path: "/basestation",
    text: "Базовые станции",
    component: BaseStationPage,
    withoutAuth: true,
    sideBarItem: true,
    icon: <SettingsInputAntenna/>,
    exact: true
  },
  {
    path: "/nodaccounting",
    text: "Учет по Нод",
    component: BaseStationPage,
    withoutAuth: true,
    sideBarItem: true,
    icon: <Assessment/>,
    exact: true
  },
  {
    path: "/maps",
    text: "Карта",
    component: BaseStationPage,
    withoutAuth: true,
    sideBarItem: true,
    icon: <Map/>,
    exact: true
  },

  {
    path: "/usermanage",
    text: "Управление пользователями",
    component: UserManagePage,
    withoutAuth: true,
    sideBarItem: true,
    icon: <People/>,
    exact: true
  },
  {
    path: "/usermanage/user/create",
    text: "Создание пользователя",
    component: UserEdit,
    withoutAuth: true,
    exact: true
  },
  {
    path: "/usermanage/user/edit/:id",
    text: "Редактироване пользователя",
    component: UserEdit,
    withoutAuth: true,
    exact: true
  },
  {
    path: "/usermanage/role/create",
    text: "Редактироване роли",
    component: RoleEdit,
    withoutAuth: true,
    exact: true
  },
  {
    path: "/usermanage/role/edit/:id",
    text: "Редактироване пользователя",
    component: RoleEdit,
    withoutAuth: true,
    exact: true
  }


];

export default routers;
