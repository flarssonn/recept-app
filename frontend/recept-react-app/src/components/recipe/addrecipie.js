import React from 'react'
import { Button, FormGroup, FormControl, ControlLabel, HelpBlock, Col } from 'react-bootstrap'
import $ from 'jquery'
import {browserHistory} from 'react-router'
import cookie from 'react-cookie'
import Recipe from '../../model/recipe.js'

//Class that takes input and creates a new recipe
class AddRecipie extends React.Component {

  //Method for adding a new recipe
  add(title, ingredients, description, picLink, tags){
    Recipe.addNewRecipe(cookie.load('username'), title, ingredients, description, picLink, tags).then( () => browserHistory.push('/profile'))
  }

  render () {
    //Fancier input field
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

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!$("#formControlsTitle").val().trim()) {
          return
        }
        this.add($("#formControlsTitle").val(), $("#formControlsIngredients").val(), $("#formControlsDescription").val(), "", $("#formControlsTags").val())
        $("#formControlsTitle").val("")
        $("#formControlsIngredients").val("")
        $("#formControlsDescription").val("")
        $("#formControlsTags").val("")
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
