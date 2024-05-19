import { useRef } from "react"
import { useState } from "react"


function Component (){

    const [count, setCount] = useState(0)
    const inputRef = useRef()

    const HandleCount = ()=>{
        setCount(c=> c+1)
    }
    const Reset =()=>{
        setCount(0)
    }
    const MinusCount = ()=>{
        setCount(c=> c-1)
    }

    const HandleInput = ()=>{
        const lengthInput = inputRef.current.value.length
        setCount(lengthInput)
    }

    return(
        <><label>input</label><br />
        <input onChange={HandleInput} ref={inputRef} type='text'/>
        <p> {count} </p>

        <button style={{marginRight : '10px'}} onClick={MinusCount}>-</button>
        <button onClick={HandleCount}>+</button> <br />
        <button style={{marginTop : '10px'}} onClick={Reset}>Reset</button>
        </>
    )
}

export default Component