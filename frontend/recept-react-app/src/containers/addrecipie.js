import React from 'react'
import { connect } from 'react-redux'
import { addRecipie } from '../actions'
import { Button, FormGroup, FormControl, ControlLabel, HelpBlock, Row, Col, Form } from 'react-bootstrap';

let AddRecipie = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addRecipie(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <Button type="submit">
          Add Todo
        </Button>
      </form>
    </div>
  )
}
AddRecipie = connect()(AddRecipie)

export default AddRecipie
