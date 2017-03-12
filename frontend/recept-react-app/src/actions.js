/*
 * action types
 */

export const DO_LOGIN = 'DO_LOGIN'
export const DO_LOGOUT = 'DO_LOGOUT'

/*
 * other constants


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}*/

/*
 * action creators
 */

export function doLogin(user) {
  return { type: DO_LOGIN, user }
}

export function doLogout(user) {
  return { type: DO_LOGOUT, user }
}
