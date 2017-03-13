import React from 'react';
import './main.css';
import cookie from 'react-cookie';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import { Button, FormGroup, FormControl, ControlLabel, HelpBlock, Row, Col, Form } from 'react-bootstrap';
//import $ from 'jquery';
//import {browserHistory} from 'react-router';

class Login extends React.Component  {

  constructor(props){
    super(props);

  }

  onClick (){
      var name = $("#formControlsEmail").val();
      var password = $("#formControlsPassword").val();
      var self = this;
      var data = {
        username: name,
        password: password,
        email:    name
      };
      $.ajax({
          url: 'http://localhost:3001/users/checkLogin/' + name + '/' + password,
          dataType: 'json',
          cache: false,
          type: 'GET',
          data: data,
          success: function(data) {
            if(data == '1') {
              console.log("i data.success == 1");
              cookie.save('username', name, {path: '/'});
              const path = '/profile';
              browserHistory.push(path);

            } else {
              console.log(data);
              const path = '/';
              browserHistory.push(path);
            }
          },
          error: function(err) {
            console.log("det blev error");
            alert('Something went wrong: ' + err);
          }
      });
  }

  render() {
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
          <Col md={2}><Button bsStyle="success" onClick={this.onClick} >Log in</Button></Col>
          <Col md={2}><Button bsStyle="danger">Forgotten Password</Button></Col>
          <Col md={4}></Col>
        </Row>
      </div>
    );
  }
}

export {Login};
