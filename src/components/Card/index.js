import React from 'react'

import './card.scss'

import Heart from '../../assets/heart.png'

const Card = (props) =>  {

  return (
    <>
      <h2>Dados do veículo:</h2>
      <div className='box-card-info'>
        
        <div className='box-card-info-items'>
          <h4>Marca:  {props.brand} </h4>
          <h5>Modelo: {props.model} </h5>
          
          <ul className='box-card-info-items-list'>
            <li>{ props.gas }</li>
            <li>Ano: {props.year}</li>
            <li>Fipe: {props.fipe}</li>
          </ul>
        </div>

        <div className='box-card-info-items'>
          <h4>{props.value}</h4>
          <h5> Mês ref: {props.month} </h5>
          <span 
            className ='box-card-info-items-heart' 
            onClick   = {props.handleFavorite}>
            <img src  = { Heart } />
          </span>
        </div>
      </div>
    </>
  )
}

export default Card