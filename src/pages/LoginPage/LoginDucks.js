import { LoginApi } from "../../_helpers/service";
import { history } from "../../_helpers/history";
import { Notice } from "../../utils/Notice";
import { createReducer } from "redux-starter-kit";

/**
 * Constants
 */

export const loginModule = "login";
export const USER = `${loginModule}/USER`;
export const LOGIN = `${loginModule}/LOGIN`;
export const LOADING = `${loginModule}/LOADING`;
export const TEST_SAGA = `${loginModule}/TEST_SAGA`;

/**
 * Reducer
 */

const initialState = {
  loadingLogin: true,
  loading: true,
  user: null,
  permissions: [],
  testSaga: ''
};

export default createReducer(initialState, {
  [USER]: (state, action) => {
    state.user = action.user;
    state.permissions = action.permissions;
  },
  [LOADING]: (state, action) => {
    state.loading = action.loading;
  },
  [TEST_SAGA]: (state, action) => {
    state.testSaga = action.testSaga;
  }
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
    Notice.error("Не удалось авторизоваться")
  }
};
