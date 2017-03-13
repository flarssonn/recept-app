import React from 'react'

import { Button, FormGroup, FormControl, ControlLabel, HelpBlock, Col } from 'react-bootstrap';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import cookie from 'react-cookie';

class AddRecipie extends React.Component {

  add(recipeTitle, recipeIngredients, recipeDescription, recipeTags){
    var name = cookie.load('username');
    var addUrl = 'http://localhost:3001/recipes/add/' + name
    var data = {
      title: recipeTitle,
      ingredients: recipeIngredients,
      description: recipeDescription,
      piclink: "",
      tags: recipeTags
  };
    $.ajax({
        url: addUrl,
        dataType: 'json',
        cache: false,
        type: 'POST',
        data: data,
        success: function(data) {
            console.log('Success');
        },
        error: function(err) {
            alert('Something went wrong: ' + err);
        }
    });
  }

  render () {

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
      );
    }

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!$("#formControlsTitle").val().trim()) {
          return
        }
        this.add($("#formControlsTitle").val(), $("#formControlsIngredients").val(), $("#formControlsDescription").val(), $("#formControlsTags").val() )

        $("#formControlsTitle").val("");
        $("#formControlsIngredients").val("");
        $("#formControlsDescription").val("");
        $("#formControlsTags").val("");

        browserHistory.push('/profile');
      }}>

        <FieldGroup
          id="formControlsTitle"
          type="text"
          label="Title"
          placeholder="Enter recipe title"
        />
        <FieldGroup
          id="formControlsIngredients"
          type="text"
          label="Ingredients"
          placeholder="Ingredient 1, Ingredient 2, Ingredient 3 , ..."
        />
        <FieldGroup
          id="formControlsDescription"
          type="text"
          label="Description"
          placeholder="Put oven on 180 degrees ..."
        />
        <FieldGroup
          id="formControlsTags"
          type="text"
          label="Tags"
          placeholder="Quick,Easy,Breakfast"
        />

      <Col sm={12}>
        <Button type="submit">
          Add a Recipie
        </Button>
      </Col>

      </form>
    </div>
    )
  }
}

export { AddRecipie }
