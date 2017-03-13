/*
 * action types
 */

export const DO_LOGIN = 'DO_LOGIN'
export const DO_LOGOUT = 'DO_LOGOUT'
export const IS_LOGGEDIN = 'IS_LOGGEDIN'
export const ADD_RECIPIE = 'ADD_RECIPIE'
export const TOGGLE_RECIPIE = 'TOGGLE_RECIPIE'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_FAV: 'SHOW_FAV',
}

/*
 * action creators
 */

export function doLogin(user) {
  return { type: DO_LOGIN, status }
}

export function doLogout(user) {
  return { type: DO_LOGOUT, status }
}

export function isLoggedIn(user) {
  return { type: IS_LOGGEDIN, status }
}

export function addRecipie(text) {
  return { type: ADD_RECIPIE, text }
}

export function toggleRecipie(index) {
  return { type: TOGGLE_RECIPIE, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
