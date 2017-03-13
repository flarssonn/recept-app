import React from 'react';
import '../utils/main.css';
import { FormGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import $ from 'jquery';
import {browserHistory} from 'react-router';

class Search extends React.Component  {

  handleSubmit(e){
    var input = $("#formControlsSearch").val();
    const path = '/search/' + input;
    browserHistory.push(path);
  }

  render() {
      return(

          <div className="search">
            <Row className="show-grid">
              <form onSubmit={this.handleSubmit}>
                <Col xs={6} md={10}>
                  <FormGroup>
                    <FormControl id="formControlsSearch" type="text" placeholder="Search" />
                  </FormGroup>
                </Col>
                <Col xs={6} md={2}>
                  <Button bsStyle="default" type="submit">Submit</Button>
                </Col>
                </form>
              </Row>
          </div>
      );
  }

}

export {Search};
