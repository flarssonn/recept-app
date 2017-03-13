import React from 'react';
import '../utils/main.css';
import { Row, Col } from 'react-bootstrap';
import { RecipeDetail } from './recipedetail.js';
import $ from 'jquery';
import cookie from 'react-cookie';

/*
  This class is used to get all the recipes related to a specific user.
*/

class UserRecipe extends React.Component{

  //Contructor
  constructor(props){
    super(props);
    this.state = {recipes: [],
                  users: []}

  }

  //Componenet did mount, ajax calls are handled here
  componentDidMount() {
    var thus = this;

    //Query all the recipes
    $.ajax({
        url: 'http://localhost:3001/recipes',
        dataType: 'json',
        cache: false,
        type: 'GET',
        success: function(data) {
          thus.setState({recipes: data});
        },
        error: function(err) {
            console.log(err);
        }
    });

    //Query all the user
    $.ajax({
        url: 'http://localhost:3001/users',
        dataType: 'json',
        cache: false,
        type: 'GET',
        success: function(data) {
          thus.setState({users: data});
        },
        error: function(err) {
            console.log(err);
        }
    });

  }

  //Get the recipes related to a user
  getRecipes() {
    var recipes = this.state.recipes;
    var users = this.state.users;
    var list = [];
    var length = this.state.recipes.length;
    var name = cookie.load('username')
    var id;
    for(var j = 0; j < users.length; j++){
      if(users[j].username === name){
        id = users[j].id;
      }
    }
    console.log(id);
    for(var i = 0; i < length; i++){
      if(recipes[i].UserId === id){
        list.push(<RecipeDetail title={recipes[i].title} ingredients={recipes[i].ingredients} description={recipes[i].description} key={recipes[i].id} />);
      }

    }
    return list;
  }

  //Render
  render(){
    var recipes = [];

    if (this.state.recipes.length !== 0){
      console.log("success");
      recipes = this.getRecipes();
      console.log("size: " + recipes.length);
    }

    //HTML that is rendered
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
    );

  }

}

export {UserRecipe};
