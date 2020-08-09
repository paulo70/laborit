import React from 'react'

import './app.scss'

import Header    from './components/Header'
import Container from './components/Container'

const App = () => (
	<div className = 'wrapper'>
		<Header />
		<section>
			<Container />
		</section>
	</div>
)

export default App