import { combineReducers } from 'redux'
import { IS_LOGGEDIN, DO_LOGIN, DO_LOGOUT, ADD_RECIPIE, TOGGLE_RECIPIE, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters

function user(state = [], action) {
  switch (action.type) {
    case DO_LOGIN:
      return Object.assign({}, user, {
        status: true
      })
    case DO_LOGOUT:
      return Object.assign({}, user, {
        status: false
      })
    case IS_LOGGEDIN:
      return [
        ...state.status,
        {
          status: action.status
        }
      ]
    default:
      return state
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function recipies(state = [], action) {
  switch (action.type) {
    case ADD_RECIPIE:
      return [
        ...state,
        {
          text: action.text,
          fav: false
        }
      ]
    case TOGGLE_RECIPIE:
      return state.map((recipie, index) => {
        if (index === action.index) {
          return Object.assign({}, recipie, {
            fav: !recipie.fav
          })
        }
        return recipie
      })
    default:
      return state
  }
}

const recipieApp = combineReducers({
  user,
  visibilityFilter,
  recipies
})

export default recipieApp
