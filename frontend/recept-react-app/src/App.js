import React, { Component } from 'react';
import './App.css';
import {Header} from './components/header.js';
import {Footer} from './components/footer.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {FirstPage} from './components/firstpage.js';
import {ProfilePage} from './components/profilepage.js';
import {Registration} from './components/registration.js';
import {Login} from './components/login.js';
import cookie from 'react-cookie';

const Container = (props) => <div>
    {props.children}

</div>

class App extends Component {


  render() {

    let header = null;
    if(cookie.load('username') !== null){
      header = <Header loggedIn={true}/>
    }else{
      header = <Header loggedIn={false}/>
    }


    return (
      <div>

        {header}

          <Router history={browserHistory}>
            <Route path="/" component={Container} >
              <IndexRoute component={FirstPage}/>
              <Route path="/profile" component={ProfilePage}/>
              <Route path="/login" component={(props, state, params) => <Login text="My Test App" {...props} />} />
              <Route path="/registration" component={Registration}/>
            </Route>
          </Router>

          <Footer />


      </div>
    );
  }
}


export default App;
