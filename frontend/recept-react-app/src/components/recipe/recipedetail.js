import React from 'react';
import '../../utils/main.css';
import { Thumbnail, Button, Modal } from 'react-bootstrap';
import $ from 'jquery'
import {browserHistory} from 'react-router'

const RecipeDetail = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  removeRecipe(){
    var thus = this
    $.ajax({
        url: 'http://localhost:3001/recipes/delete/' + this.props.recipeId,
        dataType: 'json',
        cache: false,
        type: 'POST',
        success: function(data) {
          console.log("Succsesful DELETE")
          thus.setState({ showModal: false })
          const path = '/';
          browserHistory.push(path);
          browserHistory.push('/profile')
        },
        error: function(err) {
            console.log(err);
        }
    })
  },

  render() {


    return (
      <div>

        <Thumbnail>
          <h3>{this.props.title}</h3>
          <p>Ingredients: {this.props.ingredients}</p>
          <p>Description: {this.props.description}</p>
          <Button bsStyle="default" bsSize="small" onClick={this.open}>See More!</Button>
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
                <Button onClick={this.removeRecipe} bsStyle="danger">Delete</Button> : <div></div>
              }
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
});


export {RecipeDetail};
