import React from 'react';
import './header.css';
import { ButtonGroup, Button, } from 'react-bootstrap';
import { Search } from './search.js'

class Navbar extends React.Component  {

    render() {
        return(

            <div className="navbar">
                <ButtonGroup >
                  <Button bsStyle="warning">Primary</Button>
                  <Button bsStyle="warning">Success</Button>
                  <Button bsStyle="warning">Info</Button>
                </ButtonGroup>
              </div>
        );
    }

}

export {Navbar};
