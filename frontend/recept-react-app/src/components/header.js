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
              <Row>
                <Col md={2}></Col>

                <Col xs={12} md={8}>
                  <Row className="show-grid">

                    <Col xs={12} md={3}>
                      <h1 className="super-header">Recipie</h1>
                    </Col>

                    <Col xs={12} md={6}>
                      <Search />
                    </Col>

                    <Col xs={12} md={3}>
                      <Navbar />
                    </Col>

                  </Row>
                </Col>

                <Col md={2}></Col>

              </Row>
            </div>

          </div>
      );

    }

}

export {Header};
