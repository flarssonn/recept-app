import React from 'react';
import './main.css';
import { ButtonGroup, Button, } from 'react-bootstrap';
import { browserHistory } from 'react-router';

class Navbar extends React.Component  {
    constructor(props){
      super(props);
      this.state = {isLoggedIn: this.props.logedIn}
    }
    handleProfileClick(e) {
      const path = '/login';
      browserHistory.push(path);
    }

    handleRegistrationClick(e) {
      const path = '/registration';
      browserHistory.push(path);
    }

    handleRecipeClick(e){
      const path = '/profile';
      browserHistory.push(path);
    }

    render() {
        const isLogedIn = this.state.loggedIn;
        if( isLogedIn ){

          return(

            <div className="navbar">
                <ButtonGroup >
                  <Button bsStyle="success" onClick={this.handleProfileClick}>My Recipes</Button>
                  <Button bsStyle="success" onClick={this.handleRecipeClick} >Add New Recipe</Button>
                  <Button bsStyle="danger" onClick={this.handleRegistrationClick}>Log Out</Button>
                </ButtonGroup>
              </div>

          );

        }else{

          return(

              <div className="navbar">
                  <ButtonGroup >
                    <Button bsStyle="success" onClick={this.handleProfileClick}>Log In</Button>
                    <Button bsStyle="primary" onClick={this.handleRegistrationClick}>Create Account</Button>
                  </ButtonGroup>
                </div>
          );
        }
    }

}

export {Navbar};
