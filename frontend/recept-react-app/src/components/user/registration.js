import React from 'react'
import '../../utils/main.css'
import {Row, Col, FormGroup, FormControl, ControlLabel, HelpBlock, Form, Button } from 'react-bootstrap'
import $ from 'jquery'
import { browserHistory } from 'react-router'
import {Header} from '../staticcomps/header.js'
import User from '../../model/user.js'

/*
* This component handles the registration of a user.
*/
class Registration extends React.Component {

  //Creates a new user
  createUser() {
    var userName = $("#formControlsUsername").val()
    var password = $("#formControlsPassword").val()
    var email = $("#formControlsEmail").val()
    User.createUser(userName, password, email)
    const path = '/'
    browserHistory.push(path)
  }

  //Render
  render() {
    //Input field implementing bootstrap
    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <Col componentClass={ControlLabel} sm={2}>
            {label}
          </Col>
          <Col sm={10}>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
          </Col>
        </FormGroup>
      )
    }

    return(
      <div>
      <Header/>
      <div className="Registration">
        <Row>
          <Col md={4}></Col>
          <Col md={4}><h1>Sign Up</h1></Col>
          <Col md={4}></Col>
        </Row>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Form horizontal onSubmit={this.submit}>
              <FieldGroup
                id="formControlsUsername"
                label="Username"
                type="text"
                placeholder="Enter username"
              />
              <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Email"
                placeholder="Enter email"
              />
              <FieldGroup
                id="formControlsPassword"
                label="Password"
                type="password"
                placeholder="Enter password"
              />
            <Button bsStyle="success" onClick={this.createUser} >Create Account</Button>
            </Form>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Row>
          <Col md={4}></Col>
          <Col md={4}></Col>
          <Col md={4}></Col>
        </Row>
      </div>
      </div>
    )
  }

}

export {Registration}
