import React from 'react';
import './header.css';
import {Button} from 'react-bootstrap';
import { browserHistory } from 'react-router';

class FirstPage extends React.Component  {

  handleClick(e){
    //e.preventDefault();
    const path = `/walla`;
    browserHistory.push(path);
  }
  render() {

    return(
      <div>
        <Button onClick={this.handleClick} > Next Page </Button>
      </div>
    );

  }

}

export {FirstPage};
