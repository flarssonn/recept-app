import React from 'react';
import './main.css';
import $ from 'jquery';
import { Row, Col, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';


class FirstPage extends React.Component  {

  componentDidMount() {
      $.ajax({
          url: 'http://localhost:3001/recipes',
          dataType: 'json',
          cache: false,
          type: 'GET',
          success: function(data) {
              console.log(data);
          },
          error: function(err) {
              console.log(err);
          }
      });
  }

  handleClick(e){
    //e.preventDefault();
    const path = '/registration';
    browserHistory.push(path);
  }



  render() {

    return(
      <div>
        <Row className="show-grid">
          <Col sm={6} md={6}>Pic</Col>
          <Col sm={6} md={6}>Pic</Col>
        </Row>
        <Row>
          <Col sm={6} md={3}>
          </Col>
          <Col sm={6} md={3}>Thumbnail</Col>
          <Col sm={6} md={3}>Thumbnail</Col>
          <Col sm={6} md={3}>Thumbnail</Col>
        </Row>
        <Row>
          <Col sm={6} md={3}>Thumbnail</Col>
          <Col sm={6} md={3}>Thumbnail</Col>
          <Col sm={6} md={3}>Thumbnail</Col>
          <Col sm={6} md={3}>Thumbnail</Col>
        </Row>
        <Button onClick={this.handleClick} > Register </Button>
      </div>
    );

  }

}

export {FirstPage};
