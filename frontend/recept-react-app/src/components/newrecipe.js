import React from 'react';
import './main.css';
import AddRecipie from '../containers/addrecipie.js'
import { PageHeader, Row, Col } from 'react-bootstrap';
import {UserRecipe} from './userrecipe.js';
import cookie from 'react-cookie';
import {Header} from './header.js';

class NewRecipe extends React.Component {
  //Byt ut ListGroupItem mot en custom recipieItem

  //Implementera ett sätt att se olika listor, typ alla sina recept, sina favoriter
  render () {


    return (

      <div>
        <Header/>
        <Row>
          <Col xs={6} md={2}></Col>
          <Col xs={6} md={8}>
            <PageHeader>{cookie.load('username')} <small>Add new recipies here!</small></PageHeader>
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

      </div>


    );

  }
}

export {NewRecipe};
