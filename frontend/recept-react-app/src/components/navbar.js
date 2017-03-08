import React from 'react';
import './main.css';
import { ButtonGroup, Button, } from 'react-bootstrap';
import { browserHistory } from 'react-router';

class Navbar extends React.Component  {

    handleClick(e) {
      const path = `/walla`
      browserHistory.push(path);
    }

    render() {
        return(

            <div className="navbar">
                <ButtonGroup >
                  <Button bsStyle="success" onClick={this.handleClick}>Profile</Button>
                  <Button bsStyle="success">Info</Button>
                  <Button bsStyle="success">Settings</Button>
                </ButtonGroup>
              </div>
        );
    }

}

export {Navbar};
