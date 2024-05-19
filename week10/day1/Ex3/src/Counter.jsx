import { useReducer, useState } from "react"

const initialState = {count : 0}

const reducer = (state, action)=>{

    switch(action.type){
        case 'INCREMENT' :
        return {...state, count : state.count + 1}

        case 'DECREMENT' : 
        return {...state,count : state.count - 1}

        case 'RESET' : 
        return {...state,count : 0}
    }
}

function Counter(){

    const [state, dispatch] = useReducer(reducer, initialState)

    const HandleAdd = ()=>{
        dispatch({type : 'INCREMENT'})
    }

    const HandleSubstract = ()=>{
        dispatch({type : 'DECREMENT'})
    }

    const HandleReset = ()=>{
        dispatch({type : 'RESET'})
    }

    return(
        <div>
            <p>{state.count}</p>
            <button onClick={HandleAdd}>+</button>
            <button onClick={HandleSubstract}>-</button><br />
            <button onClick={HandleReset}>Reset</button>
        </div>
    )
}

export default Counter