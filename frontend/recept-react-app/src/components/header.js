import React from 'react';
import logo from './frying-pan.svg';
import './header.css';
import { Navbar } from './navbar.js';
import { Search } from './search.js';
import { Grid, Row, Col } from 'react-bootstrap';
class Header extends React.Component  {

    render() {
        return(
          <div>
              <div className="header">
                  <Grid>
                    <Row className="show-grid">
                      <Col xs={6} md={2}>
                        <h1>Recipie</h1>
                      </Col>
                      <Col xs={6} md={6}>
                          <Search />
                      </Col>
                      <Col xs={6} md={3}>
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
