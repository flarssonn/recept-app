import Service from '../services/service.js'
import cookie from 'react-cookie'
import {browserHistory} from 'react-router'

class User {
  static getUsers(){
    var url = 'http://localhost:3001/users'
    return Service.get(url)
  }

  static getUser(userName){
    var url = 'http://localhost:3001/users/' + userName
    return Service.get(url)
  }

  static createUser(userName, password, email){
    var url = 'http://localhost:3001/users/create'
    var newUser = {
      username: userName,
      password: password,
      email: email
    }
    return Service.post(url, newUser)
  }

  static loginUser(userName, password){
    var url = 'http://localhost:3001/users/checkLogin/' + userName + '/' + password
    return Service.get(url).then( function(data){
      if(data === '1') {
        cookie.save('username', userName, {path: '/'})
        const path = '/profile'
        browserHistory.push(path)
      } else {
        const path = '/'
        browserHistory.push(path)
      }
    })
  }

  static getUserRecipes(userName){
    var url = 'http://localhost:3001/users/recipes/' + userName
    return Service.get(url)
  }
}

export default User
