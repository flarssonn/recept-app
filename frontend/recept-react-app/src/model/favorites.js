import Service from '../services/service.js'

class Favorites {
  static addFavoriteRecipe(userName, recipeId){
    var url = 'http://localhost:3001/favourites/add/' + userName + '/' + recipeId
    return Service.post(url, null)
  }

  static getFavoriteRecipes(userName){
    var url = 'http://localhost:3001/favourites/' + userName
    return Service.get(url)
  }
}

export default Favorites
