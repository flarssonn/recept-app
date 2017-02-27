import React, { Component } from 'react';
import './App.css';
import {Header} from './components/header.js';
import $ from 'jquery';

class App extends Component {

    componentDidMount() {
        $.ajax({
            url: 'http://localhost:3001/',
            dataType: 'json',
            cache: false,
            success: function() {
                console.log('PARTY!');
            },
            error: function() {
                console.log('Axel');
            }
        });
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}


export default App;
