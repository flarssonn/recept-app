import React from 'react';
import './main.css';
import { PageHeader, Row, Col } from 'react-bootstrap';
import {UserRecipe} from './userrecipe.js';
import cookie from 'react-cookie';
import {Header} from './header.js';

class ProfilePage extends React.Component {
  //Byt ut ListGroupItem mot en custom recipieItem

  //Implementera ett sätt att se olika listor, typ alla sina recept, sina favoriter
  render () {


    return (


      <div>
        <Header/>
        <Row>
          <Col xs={6} md={2}></Col>
          <Col xs={6} md={8}>
            <PageHeader>{cookie.load('username')} <small>See your recipies here!</small></PageHeader>
            </Col>
            <Col xs={6} md={2}></Col>
        </Row>
        <Row>
          <Col xs={6} md={2}></Col>
          <Col xs={6} md={8}>
            <UserRecipe />
          </Col>
          <Col xs={6} md={2}></Col>
        </Row>

      </div>

    );

  }
}

export {ProfilePage};
