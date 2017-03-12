import React from 'react';
import './main.css';
import AddRecipie from '../containers/addrecipie.js'
import VisibleRecipieList from '../containers/visiblerecipielist.js'
import ToggleList from './togglelist.js'
import { PageHeader, Row, Col } from 'react-bootstrap';

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
            <VisibleRecipieList />
          </Col>
          <Col xs={6} md={2}></Col>
        </Row>
        <Row>
          <Col xs={6} md={2}></Col>
          <Col xs={6} md={8}>
            <AddRecipie />
          </Col>
          <Col xs={6} md={2}></Col>
        </Row>
        <Row>
          <Col xs={6} md={2}></Col>
          <Col xs={6} md={8}>
            <ToggleList />
          </Col>
          <Col xs={6} md={2}></Col>
        </Row>
      </div>


    );

  }
}

export {ProfilePage};
