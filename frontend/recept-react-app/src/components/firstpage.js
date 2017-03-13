import React from 'react';
import './main.css';
import { Row, Col, PageHeader } from 'react-bootstrap';
import { RecipeDetail } from './recipedetail.js';
import $ from 'jquery';

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
      console.log("success");
      recipes = this.getRecipes();
      console.log("size: " + recipes.length);
    }


    return(
      <div className="fpcontainer">
      <Row>
        <Col xs={6} md={2}></Col>
          <Col xs={6} md={8}>
            <PageHeader>How pie to see you! <small>We have all the recipies for your needs!</small></PageHeader>
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

export {FirstPage};
