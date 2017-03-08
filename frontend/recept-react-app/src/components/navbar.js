import React from 'react';
import './header.css';
import { ButtonGroup, Button, } from 'react-bootstrap';

class Navbar extends React.Component  {

    render() {
        return(

            <div className="navbar">
                <ButtonGroup >
                  <Button bsStyle="success">Profile</Button>
                  <Button bsStyle="success">Info</Button>
                  <Button bsStyle="success">Settings</Button>
                </ButtonGroup>
              </div>
        );
    }

}

export {Navbar};
