import React from 'react'
import ReactDOM from 'react-dom'

import Card from './card'

describe('renders component without error', () => {
  it('render component', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Card />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})