import React from 'react';
import '../../utils/main.css';
import $ from 'jquery';
import {Header} from '../staticcomps/header.js';
import { Button, FormGroup, FormControl, ControlLabel, HelpBlock, Col, Row } from 'react-bootstrap';
import {browserHistory} from 'react-router'

/*
  This class represents the result that we gain from a search.
*/

class EditComponent extends React.Component{

  //Constructor
  constructor(props){
    super(props);
    this.state = {recipe: {}}

  }

  //This function will be called when the component mounts. Here we handle the ajax calls.
  componentDidMount() {
    var thus = this;
    var id = this.props.params.id;

    //Get the recipes related to the tag from the db.
    $.ajax({
        url: 'http://localhost:3001/recipes/' + id,
        dataType: 'json',
        cache: false,
        type: 'GET',
        success: function(data) {
          thus.setState({recipe: data});
        },
        error: function(err) {
            console.log(err);
        }
    });

  }

  edit(title, ingredients, description){
    var url = 'http://localhost:3001/recipes/edit/' + this.props.params.id
    var data = {
      title: title,
      ingredients: ingredients,
      description: description,
      piclink: ""
    }
    $.ajax({
        url: url,
        dataType: 'json',
        cache: false,
        type: 'POST',
        data: data,
        success: function(data) {
            console.log('Success EDIT');
        },
        error: function(err) {
            alert('Something went wrong: ' + err);
        }
    })
    browserHistory.push('/profile')
  }

  //Render
  render(){
    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <Col componentClass={ControlLabel} sm={2}>
            {label}
          </Col>
          <Col sm={10}>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
          </Col>

        </FormGroup>
      )
    }
    return(
      <div>
        <Header />
          <Row>
            <Col xs={6} md={2}></Col>
            <Col xs={6} md={8}>
              <div>
                <form onSubmit={e => {
                  e.preventDefault()
                  if (!$("#formControlsTitle").val().trim()) {
                    return
                  }
                  this.edit($("#formControlsTitle").val(), $("#formControlsIngredients").val(), $("#formControlsDescription").val())

                  $("#formControlsTitle").val("");
                  $("#formControlsIngredients").val("");
                  $("#formControlsDescription").val("");

                  browserHistory.push('/profile');
                }}>

                  <FieldGroup
                    id="formControlsTitle"
                    type="text"
                    label="Title"
                    defaultValue={this.state.recipe.title}
                  />
                  <FieldGroup
                    id="formControlsIngredients"
                    type="text"
                    label="Ingredients"
                    defaultValue={this.state.recipe.ingredients}
                  />
                  <FieldGroup
                    id="formControlsDescription"
                    type="text"
                    label="Description"
                    defaultValue={this.state.recipe.description}
                  />

                <Col sm={12}>
                  <Button type="submit">
                    Edit a Recipie
                  </Button>
                </Col>

                </form>
              </div>
            </Col>
            <Col xs={6} md={2}></Col>
          </Row>

      </div>

    )

  }

}

export {EditComponent};
