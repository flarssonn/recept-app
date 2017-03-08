import React from 'react';
import './header.css';
import { Navbar } from './navbar.js';
import { Search } from './search.js';
import { Row, Col } from 'react-bootstrap';
class Header extends React.Component  {

    render() {
        return(
          <div>
              <div className="header">

                    <Row className="show-grid">
                      <Col xs={6} md={2}>
                        <h1 className="super-header">Recipie</h1>
                      </Col>
                      <Col xs={6} md={8}>
                          <Search />
                      </Col>
                      <Col xs={6} md={2}>
                          <Navbar />
                      </Col>
                    </Row>

              </div>
          </div>
      );

    }

}

export {Header};
