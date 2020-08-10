import React from 'react'

const Select = (props) => (
	<select disabled = {props.disabled} className = 'select'>
    {props.children}
  </select>
)

export default Select