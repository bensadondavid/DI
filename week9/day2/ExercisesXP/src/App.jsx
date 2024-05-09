import { useState } from 'react'
import './App.css'
import Car from './component/Car'
import Garage from './component/Garage'
import Event from './Event'
import Phone from './component/Phone'
import Color from './component/Color'

function App() {

const carinfo = {name : "Ford", model : "Mustang"}

  return (
    <>
    <Car name ={carinfo.name} model={carinfo.model} />
    <Garage size={"small"}/>
    <Event/>
    <Phone/>
    <Color/>
    </>
  )
}

export default App
