import React from 'react';
import logo from './frying-pan.svg';

//import './App.css';
import './header.css'

class Header extends React.Component  {

    render() {
        return(
            <div className="header">
                <h1 className="Super-header">The Recipe App</h1>
                <img className="App-logo" src={logo}  alt="logo" />
                <h3>Find the recipie for your needs</h3>
                <div className="btn-group" role="group" aria-label="Header buttons">
                  <button type="button" className="btn btn-secondary">Fav</button>
                  <button type="button" className="btn btn-secondary">Prof</button>
                  <button type="button" className="btn btn-secondary">Pref</button>
                </div>
            </div>
        );

    }

}

export {Header};
