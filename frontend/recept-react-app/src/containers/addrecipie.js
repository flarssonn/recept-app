import React from 'react'
import { connect } from 'react-redux'
import { addRecipie } from '../actions'
import { Button } from 'react-bootstrap';
import $ from 'jquery'

function add(recipeTitle){
  var addUrl = 'http://localhost:3001/recipes/add/b@a'
  var data = {
    title: recipeTitle,
    ingredients: "tomato",
    description: "cook it",
    piclink: "",
    tags: "Axel, Aringskog"
  };
  $.ajax({
      url: addUrl,
      dataType: 'json',
      cache: false,
      type: 'POST',
      data: data,
      success: function(data) {
          console.log('Success');
      },
      error: function(err) {
          alert('Something went wrong: ' + err);
      }
  });
}

let AddRecipie = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        add(input.value)
        dispatch(addRecipie(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <Button type="submit">
          Add a Recipie
        </Button>
      </form>
    </div>
  )
}
AddRecipie = connect()(AddRecipie)

export default AddRecipie
