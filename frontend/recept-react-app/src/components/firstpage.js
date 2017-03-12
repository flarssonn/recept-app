import React from 'react';
import './main.css';
import $ from 'jquery';
import { Row, Col, Button, Image } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { ThumbNail } from './thumbnail.js';
import pie from './veg.jpg';
import { connect } from 'react-redux'


let FirstPage = ({dispatch}) =>  {

  /*componentDidMount() {
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
    //const path = '/registration';
    //browserHistory.push(path);
    //console.log(store.getState());
  }*/





    return(
      <div className="fpcontainer">
        <Row>
          <Col sm={6} md={3}>
            <ThumbNail />
          </Col>
          <Col sm={6} md={3}>
            <ThumbNail />
          </Col>
          <Col sm={6} md={3}>
            <ThumbNail />
          </Col>
          <Col sm={6} md={3}>
            <ThumbNail />
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={3}>
            <ThumbNail />
          </Col>
          <Col sm={6} md={3}>
            <ThumbNail />
          </Col>
          <Col sm={6} md={3}>
            <ThumbNail />
          </Col>
          <Col sm={6} md={3}>
            <ThumbNail />
          </Col>
        </Row>
        <Button onClick={this.handleClick} > Register </Button>
      </div>
    );

  

}
FirstPage = connect()(FirstPage);

export default FirstPage;
