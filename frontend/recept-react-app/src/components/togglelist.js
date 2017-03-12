import React from 'react'
import FilterLink from '../containers/filterlink.js'

const ToggleList = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_FAV">
      Favourites
    </FilterLink>
  </p>
)

export default ToggleList
