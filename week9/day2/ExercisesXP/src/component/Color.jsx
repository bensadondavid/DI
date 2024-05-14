import { useEffect, useState } from "react"


const Color = ()=>{

    const [favoriteColor, setFavoriteColor] = useState("red")

    const ChangeColor = ()=>{
        setFavoriteColor('blue')
    }

    useEffect(()=>{
        alert('useEffect reached')
    },[favoriteColor])

    return(
        <>
        <h3>My favorite color is {favoriteColor} </h3>
        <button onClick={ChangeColor}>Change color</button>
        </>
    )
}

export default Color