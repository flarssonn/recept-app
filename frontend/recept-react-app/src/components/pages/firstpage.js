import React from 'react'
import '../../utils/main.css'
import { Row, Col, PageHeader } from 'react-bootstrap'
import { RecipeDetail } from '../recipe/recipedetail.js'
import cookie from 'react-cookie'
import {Header} from '../staticcomps/header.js'
import Recipe from '../../model/recipe.js'

//First page of the application, displaying all recipes
class FirstPage extends React.Component{

  constructor(props){
    super(props)
    this.state = {recipes: []}
  }

  componentDidMount() {
    Recipe.getRecipes().then( recipes => this.setState({recipes: recipes}))
  }

  getRecipes() {
    var list = []
    var recipes = this.state.recipes

    //Creates a list of components showing all recipes
    for(var i = 0; i < recipes.length; i++){
      list.push(<RecipeDetail title={recipes[i].title} ingredients={recipes[i].ingredients} description={recipes[i].description} key={recipes[i].id} />);
    }
    return list
  }

  render(){
    var recipes = []
    if (this.state.recipes.length !== 0){
      recipes = this.getRecipes()
    }
    return(
      <div>
        <Header/>
        <div className="fpcontainer">
          <Row>
            <Col xs={6} md={2}></Col>
              <Col xs={6} md={8}>
                <PageHeader>How pie to see you {cookie.load('username')} ! <small>We have all the recipies for your needs!</small></PageHeader>
              </Col>
            <Col xs={6} md={2}></Col>
          </Row>
          <Row>
            <Col xs={6} md={2}></Col>
            <Col xs={6} md={8}>
              {recipes}
            </Col>
            <Col xs={6} md={2}></Col>
          </Row>
        </div>
      </div>
    )
  }
}

export {FirstPage}
