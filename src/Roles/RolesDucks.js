import { createReducer } from "redux-starter-kit";
import { NotificationManager } from "react-notifications";
import {RolesApi} from "./RolesService"



/**
 * Constants
 */

export const rolesModule = "roles";
export const ROLES = `${rolesModule}/ROLES`;
export const ROLES_UPDATE = `${rolesModule}/ROLES_UPDATE`;
export const LOADING = `${rolesModule}/LOADING `;



/**
 * Reducer
 */


const initialState = {
  roles:[],
  loading: false,
};

export default createReducer(initialState, {
  [ROLES]: (state, action) => ({
    roles: action.roles
  }),
  [ROLES_UPDATE]: (state, action) => ({
    roles: action.roles
  }),
  [LOADING]: (state, action) => ({
    loading: action.loading
  })

});




/**
 * Actions
 */


export const getRoles = () => async dispatch => {
  try {
    let response = await RolesApi.getRoles();
    dispatch({ type: ROLES, roles: response.data });
  } catch (e) {
    console.error(e);
    NotificationManager.error(e);
  }
};

export const updateRoles = role => async (dispatch, getState) => {
  try {
    let { roles } = getState()[rolesModule];
    let response = await RolesApi.updateRole(role);
    dispatch({
      type: ROLES_UPDATE,
      users: roles.map(item => (response.data.role.name === item.name ? response.data.role : item))
    });
    NotificationManager.success("Данные успешно сохранены");
  } catch (e) {
    console.error(e);
    NotificationManager.error(e);
  }
};



