import React from 'react'

import './card.scss'

const Card = (props) =>  {

  return (
    <>
      <h2 className='box-card-info-title'>Dados do veículo:</h2>
      <div className='box-card-info'>
        <div className='box-card-info-items'>
          <h4>{props.brand}</h4>
          <h5>{props.model}</h5>
          
          <ul className='box-card-info-items-list'>
            <li>{props.gas}</li>
            <li>{props.year}</li>
            <li>fipe: {props.fipe}</li>
          </ul>
        </div>

        <div className='box-card-info-items'>
          <h4>{props.value}</h4>
          <h5>Mês ref:{props.month}</h5>
          <span className='box-card-info-items-heart' onClick = {props.handleFavorite}></span>
        </div>
      </div>
    </>
  )
}

export default Card