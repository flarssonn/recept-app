import React from 'react';
import './main.css';
import { ButtonGroup, Button, } from 'react-bootstrap';
import { browserHistory } from 'react-router';

class Navbar extends React.Component  {

    handleProfileClick(e) {
      const path = '/login';
      browserHistory.push(path);
    }

    handleRegistrationClick(e) {
      const path = '/registration';
      browserHistory.push(path);
    }

    render() {
        return(

            <div className="navbar">
                <ButtonGroup >
                  <Button bsStyle="success" onClick={this.handleProfileClick}>Profile</Button>
                  <Button bsStyle="success">Browse</Button>
                  <Button bsStyle="primary" onClick={this.handleRegistrationClick}>Create Account</Button>
                </ButtonGroup>
              </div>
        );
    }

}

export {Navbar};
