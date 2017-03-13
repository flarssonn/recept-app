import React from 'react';
import './main.css';
import { ButtonGroup, Button, } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';

class Navbar extends React.Component  {

    constructor(props){
      super(props);

    }
    componentWillMount(){
      this.state = {loggedInUser: cookie.load('username')};
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
      browserHistory.push('/');
    }
    handleMyRecipesClick(e){
      browserHistory.push('/profile');
    }

    render() {

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
