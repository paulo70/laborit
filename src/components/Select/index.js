import React from 'react'

import './select.scss'

const Select = (props) => {
  return (
    <select disabled= {props.disabled}>
      {props.children}
    </select>
  )
}

export default Select