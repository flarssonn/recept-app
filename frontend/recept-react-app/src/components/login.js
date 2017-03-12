import React from 'react';
import './main.css';
import { Button, FormGroup, FormControl, ControlLabel, HelpBlock, Row, Col, Form } from 'react-bootstrap';
//import $ from 'jquery';
//import {browserHistory} from 'react-router';

class Login extends React.Component  {


  handleClick() {
    /*Den här ska i prop ha funktionen från app.js så att det är där den säger att man blir inloggad
    Jag tror vi kommer behöva redux för att på något sätt kunna göra detta
    react-router Är inte byggt för att kunna skicka props på ett bra sett.
    Redux verkar kunna spara saker globalt så vi kan ändå använda react-router
    Men istället för att skicka propsen kan man då ha de i en store typ som man når
    globalt ish
    */
    console.log(this.props.route.text);
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
            <Form horizontal>
              <FieldGroup id="formControlsEmail" type="email" label="Email" placeholder="Enter email"/>
              <FieldGroup id="formControlsPassword" label="Password" type="password" placeholder="Enter password" />
            </Form>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Row>
          <Col md={4}></Col>
          <Col md={2}><Button bsStyle="success" onClick={this.handleClick} > Log in </Button></Col>
          <Col md={2}><Button bsStyle="danger">Forgotten Password</Button></Col>
          <Col md={4}></Col>
        </Row>
      </div>
    );
  }
}

export {Login};
