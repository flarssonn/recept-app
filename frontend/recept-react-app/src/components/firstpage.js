import React from 'react';
import '../utils/main.css';
import { Row, Col, PageHeader } from 'react-bootstrap';
import { RecipeDetail } from './recipedetail.js';
import $ from 'jquery';
import cookie from 'react-cookie';
import {Header} from './header.js'

class FirstPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {recipes: []}

  }
  componentDidMount() {
    var thus = this;

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
  }

  getRecipes() {
    var recipes = this.state.recipes;
    var list = [];
    var length = this.state.recipes.length;

    for(var i = 0; i < length; i++){
      list.push(<RecipeDetail title={recipes[i].title} ingredients={recipes[i].ingredients} description={recipes[i].description} key={recipes[i].id} />);
    }
    return list;
  }

  render(){
    var recipes = [];
    //console.log(this.state.recipes);
    if (this.state.recipes.length !== 0){
      recipes = this.getRecipes();
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
    );

  }

}

export {FirstPage};
