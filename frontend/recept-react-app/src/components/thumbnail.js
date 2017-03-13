import React from 'react';
import '../utils/main.css';
import { Thumbnail, Button, Modal, Popover, OverlayTrigger, Tooltip } from 'react-bootstrap';

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
          </Thumbnail>
        );
    }

}

export {ThumbNail};
