import { createReducer } from "redux-starter-kit";
import { LoginApi } from "../_helpers/service";
import { history } from "../_helpers/store";
import { NotificationManager } from "react-notifications";

/**
 * Constants
 */

export const loginModule = "loginModule";
export const USER = `${loginModule}/USER`;
export const LOGIN = `${loginModule}/LOGIN`;

/**
 * Reducer
 */

const initialState = {
  loadingLogin: true,
  loading: true,
  user: null,
  permissions: []
};

export default createReducer(initialState, {
  [USER]: (state, action) => {
    state.user = action.user;
    state.permissions = action.permissions;
    state.loading = false;
  }
});

/**
 * Actions
 */

export const checkAuth = () => async dispatch => {
  try {
    let token = localStorage.getItem("token");
    let { data } = await LoginApi.checkAuth(token);
    dispatch({ type: USER, ...data });
  } catch (e) {
    console.error(e);
  }
};

export const login = (login, password) => async dispatch => {
  try {
    let response = await LoginApi.login(login, password);
    dispatch({ type: LOGIN, user: response.data });
    localStorage.setItem("user", response.data);
    history.push("/");
  } catch (e) {
    console.error(e);
    NotificationManager.success("Не удалось авторизоваться");
  }
};
