import React from 'react';

import { Row, Col, PageHeader } from 'react-bootstrap';
import { RecipeDetail } from './recipedetail.js';
import {Header} from '../staticcomps/header.js';

import $ from 'jquery'
import cookie from 'react-cookie'





class FavouriteRecipes extends React.Component{

  constructor(props){
    super(props)
    this.state = {recipes: []}
  }

  componentWillMount() {

    var thus = this;
    var name = cookie.load('username')
    var users = []
    var id = null


    $.ajax({
        url: 'http://localhost:3001/users',
        dataType: 'json',
        cache: false,
        type: 'GET',
        success: function(data) {
          users = data
        },
        error: function(err) {
            console.log(err);
        }
    }).then(() => {
      for(var j = 0; j < users.length; j++){
        if(users[j].username === name){
          id = users[j].id;
        }
      }
      $.ajax({
          url: 'http://localhost:3001/favourites/' + id,
          dataType: 'json',
          cache: false,
          type: 'GET',
          success: function(data) {
            console.log("Succsess get favourites!")
            thus.setState({recipes: data})
          },
          error: function(err) {
              console.log(err);
          }
      })
    }
    )

  }

  getFavourites() {
    var recipes = this.state.recipes
    var list = [];
    for(var i = 0; i < recipes.length; i++){
      list.push(<RecipeDetail recipeId={recipes[i].id} title={recipes[i].title} ingredients={recipes[i].ingredients} description={recipes[i].description} key={recipes[i].id} />);
    }
    return list;
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
    );

  }

}

export {FavouriteRecipes};
