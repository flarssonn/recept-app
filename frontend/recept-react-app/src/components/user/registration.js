import React from 'react';
import '../../utils/main.css';
import {Row, Col, FormGroup, FormControl, ControlLabel, HelpBlock, Form, Button } from 'react-bootstrap';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import {Header} from '../staticcomps/header.js';

/*
  This component handles the registration of a user.
*/

class Registration extends React.Component {

  //Submit the input from the form to the db.
  submit(e) {
    var email = $("#formControlsEmail").val();
    var password = $("#formControlsPassword").val();
    var username = $("#formControlsUsername").val();
    var data = {
      username: username,
      password: password,
      email:    email
    };
    //Ajax call to the create router on the server.
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
      );
    }

    //HTML-code that will be rendered.
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
