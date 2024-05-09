import { useState } from "react"


const Color = ()=>{

    const [favoriteColor, setFavoriteColor] = useState("red")

    const ChangeColor = ()=>{
        setFavoriteColor('blue')
    }

    return(
        <>
        <h3>My favorite value is {favoriteColor} </h3>
        <button onClick={ChangeColor}>Change color</button>
        </>
    )
}

export default Color