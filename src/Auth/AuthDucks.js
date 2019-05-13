import { createReducer } from "redux-starter-kit";

/**
 * Constants
 */

export const authModule = "auth";
export const USER = `${authModule}/USER`;

/**
 * Reducer
 */

const initialState = {
  loading: true,
  user: null
};

export default createReducer(initialState, {
  [USER]: (state, action) => ({
    user: action.user,
    loading: false
  })
});

/**
 * Actions
 */

export const checkToken = () => {
  let token = localStorage.getItem("token");
  return { type: USER, user: { name: "Zhangeldy" } };
};
