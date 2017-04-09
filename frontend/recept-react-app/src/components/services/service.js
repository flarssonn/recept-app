import $ from 'jquery'

class Service {

  static getRecipes(){
    //Query all the recipes
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
          return users[i]
        }
      }
    })
  }

  static getUserRecipes(userName){
    var userRecipes = []
    return this.getUser(userName).then( function(user) {
      return Service.getRecipes().then( function(allRecipes){
        for(var i = 0; i < allRecipes.length; i++){
          if(allRecipes[i].UserId === user.id){
            userRecipes.push(allRecipes[i])
          }
        }
        return userRecipes
      })
    })
  }

}

export default Service
