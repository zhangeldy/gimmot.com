import { LoginApi } from '../../_helpers/service';
import { history } from '../../_helpers/history';
import { Notice } from '../../utils/Notice';
import { createReducer } from 'redux-starter-kit';

/**
 * Constants
 */

export const loginModule = 'login';
export const USER = `${loginModule}/USER`;
export const LOADING = `${loginModule}/LOADING`;
export const LOADING_LOGIN = `${loginModule}/LOADING_LOGIN`;
export const PERMISSIONS = `${loginModule}/PERMISSIONS`;

/**
 * Reducer
 */

const initialState = {
  loading: true,
  loadingLogin: true,
  user: null,
  permissions: []
};

export default createReducer(initialState, {
  [LOADING]: (state, { payload }) => {
    state.loading = payload;
  },
  [LOADING_LOGIN]: (state, { payload }) => {
    state.loadingLogin = payload;
  },
  [USER]: (state, { payload }) => {
    state.user = payload;
  },
  [PERMISSIONS]: (state, { payload }) => {
    state.permissions = payload;
  }
});

/**
 * Actions
 */

export const checkAuth = () => async dispatch => {
  try {
    let token = localStorage.getItem('token');
    let { data } = await LoginApi.checkAuth(token);
    if (data) {
      dispatch({ type: USER, payload: data.user });
      dispatch({ type: PERMISSIONS, payload: data.permissions });
    }
  } catch (e) {
    console.error(e);
  } finally {
    dispatch({ type: LOADING, payload: false });
  }
};

export const login = (login, password) => async dispatch => {
  try {
    let { data } = await LoginApi.login(login, password);
    dispatch({ type: USER, payload: data.user });
    history.push('/');
  } catch (e) {
    console.error(e);
    Notice.error('Не удалось авторизоваться');
  }
};
