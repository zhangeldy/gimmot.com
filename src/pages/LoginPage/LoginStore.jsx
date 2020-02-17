import { createContext } from 'react';
import { LoginApi } from '../../_helpers/service';
import { history } from '../../_helpers/history';
import { Notice } from '../../utils/Notice';

/**
 * Constants
 */

const LOADING = `LOADING`;
const LOADING_LOGIN = `LOADING_LOGIN`;
const USER = `USER`;
const ERROR = `ERROR`;
const PERMISSIONS = `PERMISSIONS`;

export const initialState = {
  loading: true,
  loadingLogin: false,
  user: null,
  permissions: [],
  error: null
};

export const LoginContext = createContext(initialState);

/**
 * Reducer
 */
export function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case LOADING:
      return { ...state, loading: payload };
    case LOADING_LOGIN:
      return { ...state, loadingLogin: payload };
    case USER:
      return { ...state, user: payload };
    case PERMISSIONS:
      return { ...state, permissions: payload };
    case ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}

/**
 * Actions
 */
/*
export const checkAuth = () => async dispatch => {
  try {
    let token = localStorage.getItem('token');
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
    localStorage.setItem('user', response.data);
    history.push('/');
  } catch (e) {
    console.error(e);
    Notice.error('Не удалось авторизоваться');
  }
};*/
