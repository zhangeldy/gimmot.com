import { createReducer } from "redux-starter-kit";
import { AuthApi } from "../_helpers/service";

/**
 * Constants
 */

export const authModule = "auth";
export const USER = `${authModule}/USER`;
export const PERMISSIONS = `${authModule}/PERMISSIONS`;

/**
 * Reducer
 */

const initialState = {
  loading: true,
  user: null,
  permissions: []
};

export default createReducer(initialState, {
  [USER]: (state, action) => {
    state.user = action.user;
    state.loading = false;
  },
  [PERMISSIONS]: (state, action) => {
    state.permissions = action.permissions;
  }
});

/**
 * Actions
 */

export const checkAuth = () => async dispatch => {
  try {
    let token = localStorage.getItem("token");
    let { data } = await AuthApi.checkAuth(token);
    dispatch({ type: USER, user: data.user });
    dispatch({ type: PERMISSIONS, permissions: data.permissions });
  } catch (e) {
    console.error(e);
  }
};
