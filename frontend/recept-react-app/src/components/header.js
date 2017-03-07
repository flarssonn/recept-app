import React from 'react';
import logo from './frying-pan.svg';
import './header.css';
import {Navbar} from './navbar.js';
import { Button } from 'react-bootstrap';
import { ButtonToolbar} from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class Header extends React.Component  {

    render() {
        return(
          <div>
            <Grid>
              <Row className="show-grid">
                <Col xs={12} md={8}>
                    <div className="header">
                        <h1 className="Super-header">The Recipe App</h1>
                        <img className="App-logo" src={logo}  alt="logo" />
                        <h3>Find the recipie for your needs</h3>
                    </div>
                </Col>
                <Col>
                <h1>Hej</h1>

                </Col>

                <div>
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
              </Row>
              <div>
                  <Navbar />
              </div>
            </Grid>
          </div>
      );

    }

}

export {Header};
