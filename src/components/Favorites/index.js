import React from 'react'

import './favorite.scss'

const Favorite = (props) => {
  const values = Object.values( props.favorite )
  
  return (
    values.map((favorite, index) => (
      <tr key = { index }>
        <td>{ favorite.Marca }</td>
        <td>{ favorite.Modelo}</td>
        <td>{ favorite.Valor }</td>
      </tr>
    ))
  )
}

export default Favorite