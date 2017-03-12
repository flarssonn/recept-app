import React, { PropTypes } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import './main.css';

class RecipieItem extends React.Component {

  render () {

    RecipieItem.PropTypes = {
      onClick: PropTypes.func.isRequired,
      text: PropTypes.string.isRequired,
      favourite: PropTypes.boolean.isRequired
    }

    return (

      <ListGroupItem
        onclick={onClick}
      >
        {text}
      </ListGroupItem>
    );

  }


}
