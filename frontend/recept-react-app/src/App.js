import React, { Component } from 'react';
import './App.css';
import {Header} from './components/header.js';
import {Footer} from './components/footer.js';
import { Router, Route, browserHistory } from 'react-router';
import {FirstPage} from './components/firstpage.js';
import {Registration} from './components/registration.js';
import {Login} from './components/login.js';

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                  <Router history={browserHistory}>
                    <Route path="/" component={FirstPage}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/registration" component={Registration}/>
                  </Router>
                <Footer />
            </div>
        );
    }
}


export default App;
