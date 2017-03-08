import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import {Header} from './components/header.js';
import {Footer} from './components/footer.js';
import { Router, Route, browserHistory } from 'react-router';
import {FirstPage} from './components/firstpage.js';
import {Test1} from './components/test1.js';
import {Registration} from './components/registration.js';

class App extends Component {

    componentDidMount() {
        $.ajax({
            url: 'http://localhost:3001/',
            dataType: 'json',
            cache: false,
            type: 'GET',
            success: function() {
                console.log("Party!!");
            },
            error: function(err) {
                console.log(err);
            }
        });
    }

    render() {
        return (
            <div>
                <Header />
                  <Router history={browserHistory}>
                    <Route path="/" component={FirstPage}/>
                    <Route path="/walla" component={Test1}/>
                    <Route path="/registration" component={Registration}/>
                  </Router>
                <Footer />
            </div>
        );
    }
}


export default App;
