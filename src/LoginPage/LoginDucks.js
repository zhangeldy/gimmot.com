import { createReducer } from "redux-starter-kit";
import { history } from "../_helpers/store";
import { NotificationManager } from "react-notifications";
import { LoginApi } from "../_helpers/service";

/**
 * Constants
 */

export const loginModule = "login";
export const LOGIN = `${loginModule}/LOGIN`;
export const LOADING = `${loginModule}/LOADING`;
export const PERMISSIONS = `${loginModule}/PERMISSIONS`;

/**
 * Reducer
 */

const initialState = {
  user: null,
  loading: false,
  permissions: []
};

export default createReducer(initialState, {
  [LOGIN]: (state, action) => ({
    user: action.user
  }),
  [LOADING]: (state, action) => ({
    loading: action.loading
  }),
  [PERMISSIONS]: (state, action) => ({
    permissions: action.permissions
  })
});

/**
 * Actions
 */

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

export const checkAuth = () => async dispatch => {
  try {
    let response = await LoginApi.checkAuth(localStorage.getItem("user"));
    dispatch({ type: LOGIN, user: response.data });
    // dispatch(login(userName, password))
  } catch (e) {
    console.error(e);
    NotificationManager.success("Не удалось авторизоваться");
  }
};
