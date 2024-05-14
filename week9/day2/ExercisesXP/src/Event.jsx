import { useState } from "react"

const Event = ()=>{

    const clickMe = ()=>{

        alert('I was clicked')
    }
    const HandleKeyDown = (e)=>{
        if(e.key == 'Enter'){
            alert(`The enter key was pressed and your  input is ${e.target.value}`)
        }
    }

    const [isToogleOn, setIsToogleOn] = useState(true)

    const ChangeTangle = ()=>{
        setIsToogleOn(!isToogleOn)
    }
    



    return(
        <>
        <button onClick={clickMe}>
            Click me 
        </button>
        <br />
        <input onKeyDown={HandleKeyDown} type="text" name="input" />
        <br />
        <button onClick={ChangeTangle}>
            {isToogleOn ? 'On' : 'Off'}
        </button>
        </>
    )

}

export default Event 
