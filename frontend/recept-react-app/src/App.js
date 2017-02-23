import React, { Component } from 'react';
import logo from './frying-pan.svg';
import backgroundVeg from './veg.jpg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1 className="Super-header">The Recipe App</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3>Find the recipe for your needs</h3>
                </div>
                <div className="App-navbar">

                </div>
            </div>
        );
    }
}

export default App;
