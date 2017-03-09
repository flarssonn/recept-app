import React from 'react';
import './main.css';
import {Row, Col, FormGroup, FormControl, ControlLabel, HelpBlock, Form, Button } from 'react-bootstrap';

class Registration extends React.Component {

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
      <div className="Registration">
        <Row>
          <Col md={4}></Col>
          <Col md={4}><h1>Sign Up</h1></Col>
          <Col md={4}></Col>
        </Row>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Form horizontal>
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
            </Form>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Row>
          <Col md={4}></Col>
          <Col md={4}><Button bsStyle="success">Create Account</Button></Col>
          <Col md={4}></Col>
        </Row>
      </div>
    );
  }

}

export {Registration};
