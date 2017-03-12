import React, { PropTypes } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import './main.css';


const RecipieItem = ({ onClick, fav, text }) => (
  <ListGroupItem
    onClick={onClick}
  >
    {text}
  </ListGroupItem>
)

RecipieItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  fav: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default RecipieItem
