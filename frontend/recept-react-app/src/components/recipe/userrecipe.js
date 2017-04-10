import React from 'react'
import '../../utils/main.css'
import { Row, Col } from 'react-bootstrap'
import { RecipeDetail } from './recipedetail.js'
import cookie from 'react-cookie'
import User from '../../model/user.js'

/*
* This class is used to get all the recipes related to a specific user.
*/
class UserRecipe extends React.Component{

  //Contructor
  constructor(props){
    super(props)
    this.state = {userRecipes: []}
  }

  //Updates state with logged in users own recipe
  componentWillMount(){
    User.getUserRecipes(cookie.load('username')).then(userRecipes => this.setState({userRecipes: userRecipes}))
  }

  //Puts users recipes in a list of components showing a single recipe
  getRecipes() {
    var list = []
    var recipes = this.state.userRecipes
    for(var i = 0; i < recipes.length; i++){
      list.push(<RecipeDetail recipeId={recipes[i].id} title={recipes[i].title} ingredients={recipes[i].ingredients} description={recipes[i].description} key={recipes[i].id} />)
    }
    return list
  }

  //Render
  render(){
    var recipes = []
    //Get list of components with users recipe
    if (this.state.userRecipes !== undefined && this.state.userRecipes.length !== 0){
      recipes = this.getRecipes()
    }

    return(
      <div className="fpcontainer">
        <Row>
          <Col xs={6} md={2}></Col>
          <Col xs={6} md={8}>
            {recipes}
          </Col>
          <Col xs={6} md={2}></Col>
        </Row>
      </div>
    )

  }

}

export {UserRecipe}
