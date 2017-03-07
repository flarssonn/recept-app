import React from 'react';
import logo from './frying-pan.svg';
import './header.css';
import { Navbar } from './navbar.js';
import { Search } from './search.js';
import { Button } from 'react-bootstrap';
import { ButtonToolbar} from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';

class Header extends React.Component  {

    render() {
        return(
          <div>
              <div className="header">
                  <Grid>
                    <Row className="show-grid">
                      <Col xs={6} md={4}>
                        <PageHeader>Recipie <small>pies for everyone!</small></PageHeader>
                      </Col>
                      <Col xs={6} md={2}>
                          <Search />
                      </Col>
                      <Col xs={6} md={6}>

                          <Navbar />

                      </Col>
                    </Row>
                  </Grid>
              </div>
          </div>
      );

    }

}

export {Header};
