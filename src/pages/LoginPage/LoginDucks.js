import { LoginApi } from "../../_helpers/service";
import { history } from "../../_helpers/store";
import { NotificationManager } from "react-notifications";
import createReducer from "../../utils/createReducer";

/**
 * Constants
 */

export const loginModule = "login";
export const USER = `${loginModule}/USER`;
export const LOGIN = `${loginModule}/LOGIN`;
export const LOADING = `${loginModule}/LOADING`;

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
  [USER]: "action",
  [LOADING]: "action"
});

/**
 * Actions
 */

export const checkAuth = () => async dispatch => {
  try {
    let token = localStorage.getItem("token");
    let { data } = await LoginApi.checkAuth(token);
    if (data) {
      dispatch({ type: USER, ...data });
    }
  } catch (e) {
    console.error(e);
  } finally {
    dispatch({ type: LOADING, loading: false });
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
