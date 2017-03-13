import React from 'react';
import '../utils/main.css';
import { AddRecipie } from '../components/addrecipie.js'
import { PageHeader, Row, Col } from 'react-bootstrap';
import cookie from 'react-cookie';
import {Header} from './header.js';

class NewRecipe extends React.Component {

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
            //Component where you can add a new recipe
            <AddRecipie />
          </Col>
          <Col xs={6} md={2}></Col>
        </Row>

      </div>


    );

  }
}

export {NewRecipe};
