import { connect } from 'react-redux'
import { toggleRecipie } from '../actions'
import RecipieList from '../components/recipielist.js'

const getVisibleRecipies = (recipies, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return recipies
    case 'SHOW_FAV':
      return recipies.filter(r => r.fav)
  }
}

const mapStateToProps = (state) => {
  return {
    recipies: getVisibleRecipies(state.recipies, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleRecipie(id))
    }
  }
}

const VisibleRecipieList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipieList)

export default VisibleRecipieList
