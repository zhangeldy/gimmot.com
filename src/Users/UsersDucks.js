import { createReducer } from "redux-starter-kit";
import { NotificationManager } from "react-notifications";
import {UsersApi} from "./UsersService"



/**
 * Constants
 */

export const usersModul = "users";
export const USERS = `${usersModul}/USERS`;
export const USERS_UPDATE = `${usersModul}/USERS_UPDATE`;
export const ROLE_LIST = `${usersModul}/ROLE_LIST `;
export const LOADING = `${usersModul}/LOADING `;



/**
 * Reducer
 */


const initialState = {
  users: [],
  roles:[],
  loading: false,
};

export default createReducer(initialState, {
  [USERS]: (state, action) => ({
    users: action.users
  }),
  [USERS_UPDATE]: (state, action) => ({
    users: action.users
  }),
  [ROLE_LIST]: (state, action) => ({
    roles: action.roles
  }),
  [LOADING]: (state, action) => ({
    loading: action.loading
  })

});




/**
 * Actions
 */


export const getUsers = () => async dispatch => {
  try {
    let response = await UsersApi.getUsers();
    dispatch({ type: USERS, users: response.data });
  } catch (e) {
    console.error(e);
    NotificationManager.error(e);
  }
};

export const updateUser = user => async (dispatch, getState) => {
  try {
    let { users } = getState()[usersModul];
    let response = await UsersApi.updateUser(user);
    dispatch({
      type: USERS_UPDATE,
      users: users.map(item => (response.data.user.login === item.login ? response.data.user : item))
    });
    NotificationManager.success("Данные успешно сохранены");
  } catch (e) {
    console.error(e);
    NotificationManager.error(e);
  }
};



