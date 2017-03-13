import React from 'react';
import '../utils/main.css';
import { Row, Col, PageHeader } from 'react-bootstrap';
import { RecipeDetail } from './recipedetail.js';
import $ from 'jquery';
import cookie from 'react-cookie';
import {Header} from './header.js';

/*
  This class represents the result that we gain from a search.
*/

class SearchComponent extends React.Component{

  //Constructor
  constructor(props){
    super(props);
    this.state = {recipes: []}

  }

  //This function will be called when the component mounts. Here we handle the ajax calls.
  componentDidMount() {
    var thus = this;
    var text = this.props.params.text;

    //Get the recipes related to the tag from the db.
    $.ajax({
        url: 'http://localhost:3001/recipes/tag/' + text,
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

  //Get the recipes related to the tag and put them in a list.
  getRecipes() {
    var recipes = this.state.recipes;
    var list = [];
    var length = this.state.recipes.length;
    
    for(var i = 0; i < length; i++){
      list.push(<RecipeDetail title={recipes[i].title} ingredients={recipes[i].ingredients} description={recipes[i].description} key={recipes[i].id} />);
    }
    return list;
  }

  //Render
  render(){
    var recipes = [];
    //console.log(this.state.recipes);
    if (this.state.recipes.length !== 0){
      console.log("success");
      recipes = this.getRecipes();
      console.log("size: " + recipes.length);
    }

    //HTML-code that will be rendered.
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
    );

  }

}

export {SearchComponent};
