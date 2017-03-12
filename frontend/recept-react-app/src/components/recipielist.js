import React, { PropTypes } from 'react';
import RecipieItem from './recipieitem.js';
import { ListGroup } from 'react-bootstrap';

const RecipieList = ({ recipies, onRecipieClick }) => (
  <ListGroup>
    {recipies.map(recipie =>
      <RecipieItem
        key={recipie.id}
        {...recipie}
        onClick={() => onRecipieClick(recipie.id)}
      />
    )}
  </ListGroup>
)

RecipieList.propTypes = {
  recipies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    fav: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onRecipieClick: PropTypes.func.isRequired
}

export default RecipieList
