import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './container.scss'

import select  from '../Select'
import Title   from '../Title'

function Container (){

  const CARS = 'https://parallelum.com.br/fipe/api/v1/carros/marcas'
  
  const [ brand, setBrand ]           = useState([])
  const [ brandValue, setValueBrand ] = useState('')
  
  const [ model, setModel           ] = useState([])
  const [ modelValue, setModelValue ] = useState('')
  
  const [ year, setYear             ] = useState([])
  const [ yearValue, setYearValue   ] = useState('')

  const [ showModel, setShowModel ]   = useState(true)
  const [ showYear,  setShowYear  ]   = useState(true)

  useEffect(() => {
    const fetchData = async () => {

      try{
        const req = await axios (CARS)
        const res = req.data

        setBrand(res)
      } catch (error) {
        console.log('ERROR')
      }
    }

    fetchData()
  },[])

  function handleChoiceBrand(e){
    setValueBrand(e.target.value)
    setShowModel(false)

    const fetchData = async () => {

      try{
        const req = await axios (`${CARS}/${e.target.value}/modelos`)
        const res = req.data.modelos
      
        setModel(res)
      } catch (error) {
        console.log('ERROR')
      }
    }

    fetchData()
  }

  function handleChoiceModel(e){
    setShowYear(false)
    setModelValue(e.target.value)

    const fetchData = async () => {

      try{
        const req = await axios (`${CARS}/${brandValue}/modelos/${e.target.value}/anos`)
        const res = req.data
        
        console.log(res)
        setYear(res)
      } catch (error) {
        console.log('ERROR')
      }
    }

    fetchData()
  }

  function handleGetCar(e) {
    setYearValue(e.target.value)

    const fetchData = async () => {

      try{
        const req = await axios (`${CARS}/${brandValue}/modelos/${modelValue}/anos/${e.target.value}`)
        const res = req.data
        
        console.log(res)
      } catch (error) {
        console.log('ERROR')
      }
    }

    fetchData()
  }

  return (
    <div className='container'> 
      <select onChange = { handleChoiceBrand }>
        { brand.map((item, index) =>
          <option value = { item.codigo } key = { index }>{ item.nome }</option>
        )}
      </select>
  
      <select onChange = { handleChoiceModel } disabled = { showModel }>
        { model.map((item, index) =>
          <option value = { item.codigo } key = { index }>{ item.nome }</option>
        )}
      </select>
    
      <select onChange = { handleGetCar } disabled = { showYear }>
        { year.map((item, index) =>
          <option value = { item.codigo } key = { index }>{ item.nome }</option>
        )}
      </select>

    </div>
  )
}

export default Container