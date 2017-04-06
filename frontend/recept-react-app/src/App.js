import React, { Component } from 'react';
import './App.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {FirstPage} from './components/pages/firstpage.js';
import {ProfilePage} from './components/pages/profilepage.js';
import {Registration} from './components/user/registration.js';
import {Login} from './components/user/login.js';
import {NewRecipe} from './components/recipe/newrecipe.js';
import {SearchComponent} from './components/pages/searchcomponent.js';
import {EditComponent} from './components/recipe/editcomponent.js'
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
              <Route path="/editrecipe/:id" component={EditComponent}/>
            </Route>
          </Router>
      </div>
    );
  }
}


export default App;
