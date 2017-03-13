import React from 'react';
import '../utils/main.css';
import { Thumbnail, Button, Modal } from 'react-bootstrap';


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
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
});


export {RecipeDetail};
