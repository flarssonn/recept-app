import Service from '../services/service.js'

class Recipe {
  static getRecipes(){
    var url = 'http://localhost:3001/recipes'
    return Service.get(url)
  }

  static getRecipe(recipeId){
    var url = 'http://localhost:3001/recipes/' + recipeId
    return Service.get(url)
  }

  static addNewRecipe(userName, title, ingredients, description, picLink, tags){
    var url = 'http://localhost:3001/recipes/add/' + userName
    var newRecipe = {
      title: title,
      ingredients: ingredients,
      description: description,
      picLink: picLink,
      tags:tags
    }
    return Service.post(url, newRecipe)
  }

  static removeRecipe(recipeId){
    var url = 'http://localhost:3001/recipes/delete/' + recipeId
    return Service.post(url, null)
  }

  static editRecipe(recipeId, title, ingredients, description, picLink){
    var url = 'http://localhost:3001/recipes/edit/' + recipeId
    var editedRecipe = {
      title: title,
      ingredients: ingredients,
      description: description,
      piclink: ""
    }
    return Service.post(url, editedRecipe)
  }

  static searchRecipe(tag){
    var url = 'http://localhost:3001/recipes/tag/' + tag
    return Service.get(url)
  }
}

export default Recipe
