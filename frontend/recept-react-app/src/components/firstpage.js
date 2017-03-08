import React from 'react';
import './main.css';
import $ from 'jquery';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';


class FirstPage extends React.Component  {

  componentDidMount() {
      $.ajax({
          url: 'http://localhost:3001/',
          dataType: 'json',
          cache: false,
          type: 'GET',
          success: function(data) {
              console.log(data);
          },
          error: function(err) {
              console.log(err);
          }
      });
  }

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
