import React from 'react'
import '../../utils/main.css'
import { Thumbnail, Button, Modal } from 'react-bootstrap'
import {browserHistory} from 'react-router'
import cookie from 'react-cookie'
import Favorite from '../../model/favorites.js'
import Recipe from '../../model/recipe.js'
const RecipeDetail = React.createClass({

  getInitialState() {
    return { showModal: false }
  },

  close() {
    this.setState({ showModal: false })
  },

  open() {
    this.setState({ showModal: true })
  },

  favourite() {
    Favorite.addFavoriteRecipe(cookie.load('username'), this.props.recipeId)
  },

  removeRecipe(){
    Recipe.removeRecipe(this.props.recipeId).then(function(){
      close()
      //Ugly hack to force page reload with removed recipe
      browserHistory.push('/');
      browserHistory.push('/profile')
    })
  },

  editRecipe(){
    browserHistory.push('/editrecipe/' + this.props.recipeId)
  },

  render() {

    return (
      <div>

        <Thumbnail>
          <h3>{this.props.title}</h3>
          <p>Ingredients: {this.props.ingredients}</p>
          <p>Description: {this.props.description}</p>
          <Button bsStyle="default" bsSize="small" onClick={this.open}>See More!</Button>
          <Button bsStyle="warning" bsSize="small" onClick={this.favourite}>Favourite</Button>
        </Thumbnail>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Ingredients</h4>
            <p>{this.props.ingredients}</p>

            <h4>Description</h4>
            <p>{this.props.description}</p>

            </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            {this.props.recipeId !== undefined ?
              <Button onClick={this.editRecipe} bsStyle="success">Edit Recipe</Button> : <div></div>
            }
            {this.props.recipeId !== undefined ?
              <Button onClick={this.removeRecipe} bsStyle="danger">Delete</Button> : <div></div>
            }
          </Modal.Footer>
        </Modal>

      </div>
    )
  }
})

export {RecipeDetail}
