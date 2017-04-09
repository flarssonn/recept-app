import React from 'react'
import '../../utils/main.css'
import $ from 'jquery'
import {Header} from '../staticcomps/header.js'
import { Button, FormGroup, FormControl, ControlLabel, HelpBlock, Row, Col, Form } from 'react-bootstrap'
import Service from '../services/service.js'

class Login extends React.Component  {

  loginUser (){
      //get data from inputfields
      var name = $("#formControlsUsername").val();
      var password = $("#formControlsPassword").val();
      Service.loginUser(name, password)
  }

  render() {
    //Input field from bootstrap
    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <Col componentClass={ControlLabel} sm={2}>{label}</Col>
          <Col sm={10}>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
          </Col>
        </FormGroup>
      );
    }

    return(
      <div>
      <Header />
      <div className="Registration">
        <Row>
          <Col md={4}></Col>
          <Col md={4}><h1>Log in</h1></Col>
          <Col md={4}></Col>
        </Row>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Form horizontal onSubmit={this.submit}>
              <FieldGroup id="formControlsUsername" type="text" label="Username" placeholder="Enter Username"/>
              <FieldGroup id="formControlsPassword" label="Password" type="password" placeholder="Enter password" />

            </Form>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Row>
          <Col md={4}></Col>
          <Col md={2}><Button bsStyle="success" onClick={this.loginUser} >Log in</Button></Col>
          <Col md={2}><Button bsStyle="danger">Forgotten Password</Button></Col>
          <Col md={4}></Col>
        </Row>
      </div>
      </div>
    );
  }
}

export {Login}
