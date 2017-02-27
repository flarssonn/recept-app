import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import {Header} from './components/header.js'

class App extends Component {
    componentDidMount() {

        $.ajax({
            url: 'http://localhost:4000/',
            dataType: 'json',
            cache: false,
            type: 'GET',
            success: function() {
                console.log("Party!!");
            },
            error: function() {
                console.log("error");
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
