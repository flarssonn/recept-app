import React from 'react';
import logo from './frying-pan.svg';
import './header.css';
import {Navbar} from './navbar.js';

class Header extends React.Component  {

    render() {
        return(
            <div>
                <div className="header">
                    <h1 className="Super-header">The Recipe App</h1>
                    <img className="App-logo" src={logo}  alt="logo" />
                    <h3>Find the recipe for your needs</h3>
                </div>
                <Navbar />
            </div>
        );

    }

}

export {Header};
