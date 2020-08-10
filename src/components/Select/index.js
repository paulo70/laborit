import React from 'react'

import './select.scss'

const Select = (props) => (
  <select disabled= { props.disabled }>
    { props.children }
  </select>
)

export default Select
