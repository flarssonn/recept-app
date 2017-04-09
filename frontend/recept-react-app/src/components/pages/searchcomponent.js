import React from 'react'
import '../../utils/main.css'
import { Row, Col, PageHeader } from 'react-bootstrap'
import { RecipeDetail } from '../recipe/recipedetail.js'
import cookie from 'react-cookie'
import {Header} from '../staticcomps/header.js'
import Service from '../services/service.js'

/*
  This class represents the result that we get from a search.
*/
class SearchComponent extends React.Component{

  //Constructor
  constructor(props){
    super(props);
    this.state = {recipes: []}
  }

  //This function will be called when the component mounts. Here we handle the ajax calls.
  componentDidMount() {
    Service.searchRecipe(this.props.params.text).then( searchResults => this.setState({recipes: searchResults}))
  }

  //Get the recipes related to the tag and put them in a list.
  getRecipes() {
    var recipes = this.state.recipes
    var list = []
    for(var i = 0; i < recipes.length; i++){
      list.push(<RecipeDetail title={recipes[i].title} ingredients={recipes[i].ingredients} description={recipes[i].description} key={recipes[i].id} />)
    }
    return list
  }

  //Render
  render(){
    var recipes = []
    if (this.state.recipes.length !== 0){
      recipes = this.getRecipes()
    }

    return(
      <div className="fpcontainer">
        <Header/>
        <Row>
          <Col xs={6} md={2}></Col>
          <Col xs={6} md={8}>
            <PageHeader>{cookie.load('username')} <small>This is your search results!</small></PageHeader>
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
    )
  }
}

export {SearchComponent}
