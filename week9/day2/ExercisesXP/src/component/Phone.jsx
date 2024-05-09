import { useState } from "react"


const Phone = ()=>{
    const [brand, setBrand]= useState("Samsung")
    const [model, setModel]= useState("Galaxy S20")
    const [color, setColor]= useState("Black")
    const [year, setYear]= useState(2020)

    const ChangeColor = ()=>{
        setColor('blue')
    }

    return(
        <>
        <h3>My phone is a {brand}</h3>
        <h5>it's a {model}, {color} from {year} </h5>
        <button onClick={ChangeColor}>Change color</button>
        </>
    )
}

export default Phone