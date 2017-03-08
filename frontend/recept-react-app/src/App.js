import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import {Header} from './components/header.js';
import {Footer} from './components/footer.js';
import { Router, Route, hashHistory } from 'react-router'
import {Test} from './components/test.js'
import {Test1} from './components/test1.js'

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
                  <Router history={hashHistory}>
                    <Route path="/" component={Test}/>
                    <Route path="/walla" component={Test1}/>
                  </Router>
                <Footer />
            </div>
        );
    }
}


export default App;
