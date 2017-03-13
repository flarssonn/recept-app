import React from 'react';
import './main.css';
import { Thumbnail, Button } from 'react-bootstrap';

class ThumbNail extends React.Component  {

    render() {
        return(
          <Thumbnail src="" alt="242x200">
            <h3>{this.props.title}</h3>
            <p>Ingredients: {this.props.ingredients}</p>
            <p>Description: {this.props.description}</p>
            <Button bsStyle="default" bsSize="small">See more!</Button>
          </Thumbnail>
        );
    }

}

export {ThumbNail};
