import { combineReducers } from 'redux'
import { DO_LOGIN, DO_LOGOUT } from './actions'


function user(state = [], action) {
  switch (action.type) {
    case DO_LOGIN:
      return [
        ...state,
        {
          isLoggedIn: true
        }
      ]
    case DO_LOGOUT:
    return [
      ...state,
      {
        isLoggedIn: false
      }
    ]
    default:
      return state
  }
}

export default function recipeApp(state = {}, action) {
  return {
    user: user(state.user, action)
  }
}
