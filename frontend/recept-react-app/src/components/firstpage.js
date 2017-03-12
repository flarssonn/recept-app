import React from 'react';
import './main.css';
import { Row, Col, Button, PageHeader } from 'react-bootstrap';
import { ThumbNail } from './thumbnail.js';

class FirstPage extends React.Component{

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




  render(){
    return(
      <div className="fpcontainer">
      <Row>
        <Col xs={6} md={2}></Col>
          <Col xs={6} md={8}>
            <PageHeader>How pie to see you! <small>We have all the recipies for your needs!</small></PageHeader>
          </Col>
        <Col xs={6} md={2}></Col>
      </Row>
        <Row>
        <Col xs={6} md={2}></Col>
          <Col xs={6} md={8}>
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
          </Row></Col>
          <Col xs={6} md={2}></Col>
        </Row>
        <Button onClick={this.handleClick} > Register </Button>
      </div>
    );

  }

}

export {FirstPage};
