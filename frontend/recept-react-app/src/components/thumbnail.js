import React from 'react';
import './main.css';
import { Thumbnail, Button } from 'react-bootstrap';

class ThumbNail extends React.Component  {

    render() {
        return(
          <Thumbnail src="" alt="242x200">
            <h3>A pie</h3>
            <p>Description</p>
            <Button bsStyle="default" bsSize="small">See more!</Button>
          </Thumbnail>
        );
    }

}

export {ThumbNail};
