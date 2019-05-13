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
  [USER]: (state, action) => ({
    user: action.user,
    loading: false
  }),
  [PERMISSIONS]: (state, action) => ({
    permissions: action.permissions
  })
});

/**
 * Actions
 */

export const checkToken = () => async dispatch => {
  try {
    let token = localStorage.getItem("token");
    let response = await AuthApi.checkAuth(token);
    dispatch({ type: USER, user: response.data.user });
    dispatch({ type: PERMISSIONS, user: response.data.permissions });
  } catch (e) {
    console.error(e);
  }
};
