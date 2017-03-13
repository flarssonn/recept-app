import React from 'react';
import '../utils/main.css';
import { ButtonGroup, Button, } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';

class Navbar extends React.Component  {

    constructor(props){
      super(props);
      this.state = {loggedInUser: cookie.load('username')};
      this.handleLogOutClick = this.handleLogOutClick.bind(this);
    }

    handleProfileClick(e) {
      const path = '/login';
      browserHistory.push(path);
    }

    handleRegistrationClick(e) {
      const path = '/registration';
      browserHistory.push(path);
    }

    handleNewRecipeClick(e){
      const path = '/newrecipe';
      browserHistory.push(path);
    }

    handleLogOutClick(e){
      cookie.remove('username', { path: '/'});
      this.setState({loggedInUser: cookie.load('username')});
      browserHistory.push('/');
    }

    handleMyRecipesClick(e){
      browserHistory.push('/profile');
    }

    render() {
        //If there is a logged in user get logged in navbar
        if(this.state.loggedInUser !== undefined){

          return(

            <div className="navbar" key={this.state.isLoggedIn}>
                <ButtonGroup >
                  <Button bsStyle="success" onClick={this.handleMyRecipesClick}>My Recipes</Button>
                  <Button bsStyle="success" onClick={this.handleNewRecipeClick} >Add New Recipe</Button>
                  <Button bsStyle="danger" onClick={this.handleLogOutClick}>Log Out</Button>
                </ButtonGroup>
              </div>

          );

        }else{

          return(

              <div className="navbar" key={this.state.isLoggedIn}>
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
