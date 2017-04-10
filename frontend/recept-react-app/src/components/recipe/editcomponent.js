import React from 'react'
import '../../utils/main.css'
import $ from 'jquery'
import {Header} from '../staticcomps/header.js'
import { Button, FormGroup, FormControl, ControlLabel, HelpBlock, Col, Row, PageHeader } from 'react-bootstrap'
import {browserHistory} from 'react-router'
import cookie from 'react-cookie'
import Recipe from '../../model/recipe.js'

//Component used to edit an existing recipe
class EditComponent extends React.Component{

  //Constructor
  constructor(props){
    super(props);
    this.state = {recipe: {}}
  }

  //This function will be called when the component mounts. Here we handle the ajax calls.
  componentDidMount() {
    var id = this.props.params.id;
    Recipe.getRecipe(id).then( recipe => this.setState({recipe: recipe}) )
  }

  edit(title, ingredients, description){
    Recipe.editRecipe(this.props.params.id, title, ingredients, description).then( () => browserHistory.push('/profile') )
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
            <PageHeader>{cookie.load('username')} <small>Edit a recipie here!</small></PageHeader>
            </Col>
            <Col xs={6} md={2}></Col>
        </Row>
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

export {EditComponent}
