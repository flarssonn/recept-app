import React from 'react';
import './header.css';
import { FormGroup, FormControl, Button, Row, Col } from 'react-bootstrap';

class Search extends React.Component  {

    render() {
        return(

            <div className="search">
              <Row className="show-grid">
                  <Col xs={6} md={4}>
                    <FormGroup>
                      <FormControl type="text" placeholder="Search" />
                    </FormGroup>
                  </Col>
                  <Col xs={6} md={4}>
                    <Button bsStyle="default">Submit</Button>
                  </Col>
                </Row>
            </div>
        );
    }

}

export {Search};
