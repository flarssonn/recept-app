import React from 'react';
import logo from './frying-pan.svg';
import './header.css';
import {Navbar} from './navbar.js';
import { Button } from 'react-bootstrap';
import { ButtonToolbar} from 'react-bootstrap';

class Header extends React.Component  {

    render() {
        return(
          <div>
            <div className="header">
                <h1 className="Super-header">The Recipe App</h1>
                <img className="App-logo" src={logo}  alt="logo" />
                <h3>Find the recipie for your needs</h3>


                <ButtonToolbar >
                  <Button>Default</Button>

                  <Button bsStyle="primary">Primary</Button>

                  <Button bsStyle="success">Success</Button>

                  <Button bsStyle="info">Info</Button>

                  <Button bsStyle="warning">Warning</Button>

                  <Button bsStyle="danger">Danger</Button>

                  <Button bsStyle="link">Link</Button>
                </ButtonToolbar>

                </div>

            <div>
                <Navbar />
            </div>
          </div>
      );

    }

}

export {Header};
