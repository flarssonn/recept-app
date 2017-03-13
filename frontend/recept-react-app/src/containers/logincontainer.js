import React from 'react'
import { connect } from 'react-redux'
import { Button, FormGroup, FormControl, ControlLabel, HelpBlock, Col, Form, Row } from 'react-bootstrap';
import $ from 'jquery';
import {doLogin, isLoggedIn, addRecipie} from '../actions';

function login(){


}
const getUsers = (user) => {
      return user;

}

const mapStateToProps = (state) => {
  return {
    user: getUsers(state.user)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

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

let LogInContainer = ({ dispatch }) => {

  //let input
  return (
    <div className="Registration">
      <Row>
        <Col md={4}></Col>
        <Col md={4}><h1>Log in</h1></Col>
        <Col md={4}></Col>
      </Row>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Form horizontal onSubmit={e => {
            e.preventDefault()
            if (!$("#formControlsEmail").val().trim()) {
              return
            }
            login();
            dispatch(doLogin($("#formControlsEmail").val()))
            console.log(doLogin($("#formControlsEmail").val()));

            console.log(dispatch(addRecipie($("#formControlsEmail").val()) ));

          }}>
            <FieldGroup id="formControlsEmail" type="email" label="Email" placeholder="Enter email"/>
            <FieldGroup id="formControlsPassword" label="Password" type="password" placeholder="Enter password" />
            <Button bsStyle="success" type="submit" > Log in </Button>
          </Form>
        </Col>
        <Col md={4}></Col>
      </Row>

    </div>
    )
  }
LogInContainer = connect(mapStateToProps)(LogInContainer)

export default LogInContainer
