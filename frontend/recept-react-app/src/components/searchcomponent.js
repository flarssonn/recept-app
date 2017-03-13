import React from 'react';
import '../utils/main.css';
import { Row, Col, PageHeader } from 'react-bootstrap';
import { RecipeDetail } from './recipedetail.js';
import $ from 'jquery';
import cookie from 'react-cookie';
import {Header} from './header.js';

class SearchComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {recipes: []}

  }
  componentDidMount() {
    var thus = this;
    var text = this.props.params.text;
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

  getRecipes() {
    var recipes = this.state.recipes;
    var list = [];
    var length = this.state.recipes.length;
    var id;

    console.log(id);
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
