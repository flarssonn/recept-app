import React from 'react';
import './main.css';
import {Row, Col, FormGroup, FormControl, ControlLabel, HelpBlock, Form, Button } from 'react-bootstrap';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import {Header} from './header.js';
class Registration extends React.Component {

  submit(e) {
    var email = $("#formControlsEmail").val();
    var password = $("#formControlsPassword").val();
    var username = $("#formControlsUsername").val();
    var data = {
      username: username,
      password: password,
      email:    email
    };
    $.ajax({
        url: 'http://localhost:3001/users/create',
        dataType: 'json',
        cache: false,
        type: 'POST',
        data: data,
        success: function(data) {

            console.log(data);
        },
        error: function(err) {
            alert('Something went wrong: ' + err);
        }
    });
    const path = '/';
    browserHistory.push(path);
  }

  render() {
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
      );
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
            <Button bsStyle="success" type="submit" >Create Account</Button>
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
    );
  }

}

export {Registration};
