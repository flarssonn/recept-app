import React from 'react';
import '../../utils/main.css';
import { Navbar } from './navbar.js';
import { Search } from './search.js';
import { Row, Col } from 'react-bootstrap';
import {browserHistory} from 'react-router';

//The header component thats always on top of each side
class Header extends React.Component  {

  //If logo is pressed you get redirected to the firspage
  handleClick(e){
    const path = `/`;
    browserHistory.push(path);
  }

    render() {
        return(
          <div>

            <div className="header">
              <Row>
                <Col md={1}></Col>
                <Col xs={12} md={10}>
                  <Row className="show-grid">

                    <Col xs={12} md={3}>
                      <div onClick={this.handleClick}>
                        <h1 className="super-header">Recipie</h1>
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <Search />
                    </Col>

                    <Col xs={12} md={3}>
                      <Navbar />
                    </Col>
                  </Row>
                </Col>
                <Col md={1}></Col>
              </Row>
            </div>

          </div>
      );

    }

}

export {Header};
