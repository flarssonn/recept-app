import React, { Component } from 'react';
import './App.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {FirstPage} from './components/firstpage.js';
import {ProfilePage} from './components/profilepage.js';
import {Registration} from './components/registration.js';
import {Login} from './components/login.js';
import cookie from 'react-cookie';
import {NewRecipe} from './components/newrecipe.js';

const Container = (props) => <div>
    {props.children}

</div>

class App extends Component {

  render() {
    console.log( cookie.load('username') );
    return (
      <div>



          <Router history={browserHistory}>
            <Route path="/" component={Container} >
              <IndexRoute component={FirstPage}/>
              <Route path="/profile" component={ProfilePage}/>
              <Route path="/login" component={(props, state, params) => <Login text="My Test App" {...props} />} />
              <Route path="/registration" component={Registration}/>
              <Route path="/newrecipe" component={NewRecipe}/>
            </Route>
          </Router>

      </div>
    );
  }
}


export default App;
