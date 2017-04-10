import cookie from 'react-cookie'
import {browserHistory} from 'react-router'
import $ from 'jquery'


class Service {

  static getRecipes(){
    return $.ajax({
      url: 'http://localhost:3001/recipes',
      dataType: 'json',
      cache: false,
      type: 'GET',
      success: function(data) {
        console.log("Succsesfully fetched all recipes")
      },
      error: function(err) {
        console.log(err);
      }
    }).done( function(data) {
      return data
    })
  }

  static getRecipe(recipeId){
    return $.ajax({
        url: 'http://localhost:3001/recipes/' + recipeId,
        dataType: 'json',
        cache: false,
        type: 'GET',
        success: function(data) {
          console.log("Successfully fetched recipe: id=" + recipeId)
        },
        error: function(err) {
            console.log(err);
        }
    })
  }

  static addNewRecipe(userName, title, ingredients, description, picLink, tags){
    var newRecipe = {
      title: title,
      ingredients: ingredients,
      description: description,
      picLink: picLink,
      tags:tags
    }
    return $.ajax({
        url: 'http://localhost:3001/recipes/add/' + userName,
        dataType: 'json',
        cache: false,
        type: 'POST',
        data: newRecipe,
        success: function(data) {
            console.log('Successfully added new recipe');
        },
        error: function(err) {
            alert('Something went wrong: ' + err);
        }
    })
  }

  static removeRecipe(recipeId){
    return $.ajax({
        url: 'http://localhost:3001/recipes/delete/' + recipeId,
        dataType: 'json',
        cache: false,
        type: 'POST',
        success: function(data) {
          console.log("Succsesfully deleted recipe: id=" + recipeId )
        },
        error: function(err) {
            console.log(err);
        }
    })
  }

  static editRecipe(recipeId, title, ingredients, description, picLink){
    var editedRecipe = {
      title: title,
      ingredients: ingredients,
      description: description,
      piclink: ""
    }
    return $.ajax({
        url: 'http://localhost:3001/recipes/edit/' + recipeId,
        dataType: 'json',
        cache: false,
        type: 'POST',
        data: editedRecipe,
        success: function(data) {
            console.log('Successfullt edited recipe: id=' + recipeId)
        },
        error: function(err) {
            alert('Something went wrong: ' + err);
        }
    })
  }

  static searchRecipe(tag){
    return $.ajax({
        url: 'http://localhost:3001/recipes/tag/' + tag,
        dataType: 'json',
        cache: false,
        type: 'GET',
        success: function(data) {
          console.log("Successfulle fetched search results for tag=" + tag)
          return data
        },
        error: function(err) {
            console.log(err)
        }
    })
  }

  static getUsers(){
    //Query all the user
    return $.ajax({
        url: 'http://localhost:3001/users',
        dataType: 'json',
        cache: false,
        type: 'GET',
        success: function(data) {
          console.log("Succsesfully fetched all users")
        },
        error: function(err) {
            console.log(err);
        }
    }).done( function(data) {
      return data
    })
  }

  static getUser(userName){
    return this.getUsers().then( function(users) {
      for(var i = 0; i<users.length; i++){
        if(users[i].username === userName){
          console.log("Succsesfully fetched user: " + userName)
          return users[i]
        }
      }
    })
  }

  static createUser(userName, password, email){
    var newUser = {
      username: userName,
      password: password,
      email: email
    }
    return $.ajax({
      url: 'http://localhost:3001/users/create',
      dataType: 'json',
      cache: false,
      type: 'POST',
      data: newUser,
      success: function(data) {
        console.log('Succesfully created new user: ' + userName);
      },
      error: function(err) {
        console.log(err)
      }
    })
  }

  static loginUser(userName, password){
    var loginCredentials = {
      username: userName,
      password: password,
      email: userName
    }
    $.ajax({
      url: 'http://localhost:3001/users/checkLogin/' + userName + '/' + password,
      dataType: 'json',
      cache: false,
      type: 'GET',
      data: loginCredentials,
      success: function(data) {
        if(data === '1') {
          console.log("i data.success == 1");
          cookie.save('username', userName, {path: '/'});
          const path = '/profile';
          browserHistory.push(path);
        } else {
          console.log(data);
          const path = '/';
          browserHistory.push(path);
        }
      },
      error: function(err) {
        console.log("det blev error");
        alert('Something went wrong: ' + err);
      }
    })
  }

  static getUserRecipes(userName){
    var userRecipes = []
    return this.getUser(userName).then( function(user) {
      return Service.getRecipes().then( function(allRecipes){
        for(var i = 0; i < allRecipes.length; i++){
          if(allRecipes[i].UserId === user.id){
            console.log("Succsesfully fetched user: " + userName + "s recepes")
            userRecipes.push(allRecipes[i])
          }
        }
        return userRecipes
      })
    })
  }

  //A user favorites a recipe
  static addFavoriteRecipe(userName, recipeId){
    return this.getUser(userName).then( function(user) {
      return $.ajax({
          url: 'http://localhost:3001/favourites/add/' + user.id + '/' + recipeId,
          dataType: 'json',
          cache: false,
          type: 'POST',
          success: function(data) {
            console.log("Succsesfully added recipe: id=" + recipeId + " to favourites!")
          },
          error: function(err) {
              console.log(err);
          }
      })
    })
  }

  //Get a users favorite recipes
  static getFavoriteRecipes(userName){
    //var userFavorites = []
    return this.getUser(userName).then( function(user) {
      return $.ajax({
          url: 'http://localhost:3001/favourites/' + user.id,
          dataType: 'json',
          cache: false,
          type: 'GET',
          success: function(data) {
            console.log("Succsess got user: id= " + user.id + " favourites!")
            return data
          },
          error: function(err) {
              console.log(err);
          }
      })
    })
  }

}

export default Service
