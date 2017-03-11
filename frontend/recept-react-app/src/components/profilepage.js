import React from 'react';
import './main.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class ProfilePage extends React.Component {


  const RecipieItem = React.createClass({
    render() {

      return (
          //Custom item för recipie
          

      );

    }

  });

  render () {

    return (

      <div>
        <ListGroup>
          //Byt ut ListGroupItem mot cusmtommade receptItem
          <ListGroupItem header="Recipie 1">Sheppards pie</ListGroupItem>
          <ListGroupItem header="Recipie 2">Raspberry pie</ListGroupItem>
          <ListGroupItem header="Recipie 3">Pie pie</ListGroupItem>
          <ListGroupItem header="Recipie 4">Supernice pie</ListGroupItem>
        </ListGroup>
      </div>


    );

  }
}

export {ProfilePage}
