import React from 'react'
import { Row, Col, PageHeader } from 'react-bootstrap'
import { RecipeDetail } from './recipedetail.js'
import {Header} from '../staticcomps/header.js'
import cookie from 'react-cookie'
import Favorite from '../../model/favorites.js'

class FavouriteRecipes extends React.Component{

  constructor(props){
    super(props)
    this.state = {favoriteRecipes: []}
  }

  componentWillMount() {
    Favorite.getFavoriteRecipes(cookie.load('username')).then( favorites => this.setState({favoriteRecipes: favorites}))
  }

  getFavourites() {
    var list = []
    var recipes = this.state.favoriteRecipes
    for(var i = 0; i < recipes.length; i++){
      list.push(<RecipeDetail recipeId={recipes[i].id} title={recipes[i].title} ingredients={recipes[i].ingredients} description={recipes[i].description} key={recipes[i].id} />)
    }
    return list
  }

  render(){
    var recipes = this.getFavourites();
    return(
      <div className>
        <Header/>
        <Row>
          <Col xs={6} md={2}></Col>
          <Col xs={6} md={8}>
            <PageHeader>{cookie.load('username')} <small>This is your favourite recipies!</small></PageHeader>
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

export {FavouriteRecipes}
