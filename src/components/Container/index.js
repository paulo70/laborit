import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './container.scss'

import select   from '../Select'
import Title    from '../Title'
import Card     from '../Card'
import Label    from '../Label'
import Favorite from '../Favorites'

function Container (){

  const CARS = 'https://parallelum.com.br/fipe/api/v1/carros/marcas'
  
  const [ brand, setBrand ]           = useState([])
  const [ brandValue, setValueBrand ] = useState('')
  
  const [ model, setModel           ] = useState([])
  const [ modelValue, setModelValue ] = useState('')
  
  const [ year, setYear             ] = useState([])
  const [ yearValue, setYearValue   ] = useState('')

  const [ infoCar, setInfocar       ] = useState({})
  const [ favorite, setFavorite     ] = useState({})

  const [ showModel, setShowModel ]   = useState(true)
  const [ showYear,  setShowYear  ]   = useState(true)

  const [  loadTask, setLoadTask  ]   = useState(true)


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

  useEffect(() => {

   function getTasks(){
    const carsDB  = localStorage['infos']
    let listTasks = carsDB ? JSON.parse(carsDB) : []

    setFavorite(listTasks)
   }

   if(loadTask){
    getTasks()
    setLoadTask(false)
   }

  },[loadTask])


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
        setYear(res)

      } catch (error) {
        console.log('ERROR')
      }
    }

    fetchData()
  }

  function handleGetInfoCar(e) {
    setYearValue(e.target.value)

    const fetchData = async () => {

      try{
        const req = await axios (`${CARS}/${brandValue}/modelos/${modelValue}/anos/${e.target.value}`)
        const res = req.data
        setInfocar(res)
        setFavorite(res)

      } catch (error) {
        console.log('ERROR')
      }
    }

    fetchData()
  }

  function handleFavorite(){

    const carsDB  = localStorage['infos']
    const infos   = carsDB ? JSON.parse(carsDB) : []

    infos.push(infoCar)
    localStorage['infos'] = JSON.stringify(infos)
  }

  return (
    <div className='container'>
      <section className='box-label'>
        <Label text = 'Escolha a Marca:' />
        <Label text = 'Escolha o Modelo:' />
        <Label text = 'Escolha o ano:' />
      </section>
      
      <section className='box-select'>
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
    
        <select onChange = { handleGetInfoCar } disabled = { showYear }>
          { year.map((item, index) =>
            <option value = { item.codigo } key = { index }>{ item.nome }</option>
          )}
        </select>
      </section> 
      
      <section className='box-card'>

        { Object.keys(infoCar).length === 0 ? 
          
          '' 
          : 
            <Card 
              brand          = { infoCar.Marca }
              model          = { infoCar.Modelo }
              gas            = { infoCar.Combustivel }
              year           = { infoCar.AnoModelo }
              fipe           = { infoCar.CodigoFipe }
              value          = { infoCar.Valor }
              month          = { infoCar.MesReferencia }
              handleFavorite = { handleFavorite }
            />
        }
      </section>

      <section className='box-favorite'>
        <h2>Veiculos Favoritados:</h2>
        <table className='box-favorite-table'>
          <thead>
            <tr>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            <Favorite 
              favorite = { favorite }
            />
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Container