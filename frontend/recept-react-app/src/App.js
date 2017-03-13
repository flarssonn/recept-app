import React, { Component } from 'react';
import './App.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {FirstPage} from './components/firstpage.js';
import {ProfilePage} from './components/profilepage.js';
import {Registration} from './components/registration.js';
import {Login} from './components/login.js';
import cookie from 'react-cookie';
import {NewRecipe} from './components/newrecipe.js';
import {SearchComponent} from './components/searchcomponent.js';

/*
  This is the main component, the parent, it handles the routing in the application.
  It uses browserHistory which is accessible everywhere in the app.
*/

const Container = (props) => <div>
    {props.children}
</div>

class App extends Component {

  render() {
    return (
      <div>
          <Router history={browserHistory}>
            <Route path="/" component={Container} >
              <IndexRoute component={FirstPage}/>
              <Route path="/profile" component={ProfilePage}/>
              <Route path="/login" component={(props, state, params) => <Login text="My Test App" {...props} />} />
              <Route path="/registration" component={Registration}/>
              <Route path="/newrecipe" component={NewRecipe}/>
              <Route path="/search/:text" component={SearchComponent}/>
            </Route>
          </Router>
      </div>
    );
  }
}


export default App;
