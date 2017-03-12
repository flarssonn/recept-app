import React, { Component } from 'react';
import './App.css';
import {Header} from './components/header.js';
import {Footer} from './components/footer.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {FirstPage} from './components/firstpage.js';
import {ProfilePage} from './components/profilepage.js';
import {Registration} from './components/registration.js';
import {Login} from './components/login.js';
import {Button} from 'react-bootstrap';


const Container = (props) => <div>
    {props.children}

</div>

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    }
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleLogIn() {

    const isLoggedIn = this.state.loggedIn;
    this.setState({loggedIn: !isLoggedIn});
    console.log();

  }

  render() {

    let header = null;

    if(this.state.loggedIn){
      header = <Header loggedIn={true}/>
    }else{
      header = <Header loggedIn={false}/>
    }

    return (
      <div>

        {header}
        <Button onClick={this.handleLogIn}>asd</Button>
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
