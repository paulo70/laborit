import React from 'react'

import './title.scss'

const Title = (props) => (
  <div className = 'box'>
	<h2 className  ='box-titles'>{props.title}</h2>
  </div>		
)

export default Title