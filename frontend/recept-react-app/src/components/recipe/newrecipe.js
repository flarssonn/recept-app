import React from 'react';
import '../../utils/main.css';
import { AddRecipie } from '../recipe/addrecipie.js'
import { PageHeader, Row, Col } from 'react-bootstrap';
import cookie from 'react-cookie';
import {Header} from '../staticcomps/header.js';

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
            <AddRecipie />
          </Col>
          <Col xs={6} md={2}></Col>
        </Row>

      </div>


    );

  }
}

export {NewRecipe};
