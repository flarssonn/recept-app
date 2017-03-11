import React from 'react';
import './main.css';
import { ListGroup, ListGroupItem, PageHeader, Row, Col } from 'react-bootstrap';

class ProfilePage extends React.Component {



  //Byt ut ListGroupItem mot en custom recipieItem

  //Implementera ett sätt att se olika listor, typ alla sina recept, sina favoriter
  render () {


    return (

      <div>
        <Row>
          <Col xs={6} md={2}></Col>
          <Col xs={6} md={8}>
            <PageHeader>Profile Page <small>See your recipies here!</small></PageHeader>
            </Col>
            <Col xs={6} md={2}></Col>
        </Row>
        <Row>
          <Col xs={6} md={2}></Col>
          <Col xs={6} md={8}>
            <ListGroup>
              <ListGroupItem header="Recipie 1">Sheppards pie</ListGroupItem>
              <ListGroupItem header="Recipie 2">Raspberry pie</ListGroupItem>
              <ListGroupItem header="Recipie 3">Pie pie</ListGroupItem>
              <ListGroupItem header="Recipie 4">Supernice pie</ListGroupItem>
              <ListGroupItem header="Recipie 5">Superdupernice pie</ListGroupItem>
              <ListGroupItem header="Recipie 6">Medioker pie?</ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs={6} md={2}></Col>
        </Row>
      </div>


    );

  }
}

export {ProfilePage};
