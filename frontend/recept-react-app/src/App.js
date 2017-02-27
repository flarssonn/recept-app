import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import logo from './frying-pan.svg';
//import backgroundVeg from './veg.jpg';
import './App.css';
import {Header} from './components/header.js'

class App extends Component {
    componentDidMount() {
    $.ajax({
        url: 'http://localhost:8080/',
        dataType: 'json',
        cache: false,
        success: function(data) {
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
