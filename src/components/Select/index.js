import React from 'react'
import { Form } from 'react-bootstrap'

const Select = (props) => (
	<>
		<Form.Control as ='select'>
      {props.children}
    </Form.Control>
	</>
)

export default Select