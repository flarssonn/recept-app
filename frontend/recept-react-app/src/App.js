import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import logo from './frying-pan.svg';
//import backgroundVeg from './veg.jpg';
import './App.css';
import {Header} from './components/header.js'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}


export default App;
