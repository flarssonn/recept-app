import React, { Component } from 'react';
import logo from './frying-pan.svg';
import backgroundVeg from './veg.jpg';
//import './App.css';
import './header.css'

class Header extends React.Component  {

    render() {
        return(
            <div className="header">
                <h1 className="Super-header">The Recipe App</h1>
                <img className="App-logo" src={logo}  alt="logo" />
                <h3>Find the recipe for your needs</h3>
            </div>
        );

    }

}

export {Header};
