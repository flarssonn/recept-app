import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import {Header} from './components/header.js';
import {Footer} from './components/footer.js';

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
                <Footer />
            </div>
        );
    }
}


export default App;
