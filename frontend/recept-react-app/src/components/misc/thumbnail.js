import React from 'react';
import '../utils/main.css';
import { Thumbnail, Button, Modal, Popover, OverlayTrigger, Tooltip } from 'react-bootstrap';

/*
  This class is a thumbnail component representing a recipe.
*/

class ThumbNail extends React.Component  {
  onClick(e){
    alert("YO");
  }
    render() {
        return(
          <Thumbnail>
            <h3>{this.props.title}</h3>
            <p>Ingredients: {this.props.ingredients}</p>
            <p>Description: {this.props.description}</p>
            <Button bsStyle="default" bsSize="small" onClick={this.onClick}>See more!</Button>
            <Button bsStyle="warning" bsSize="small" onClick={this.favourite}>Favourite</Button>
          </Thumbnail>
        );
    }
}

export {ThumbNail};
