import { useReducer, useState } from "react"


const initialState = {rates : []}

const reducer = (state, action)=>{

    switch(action.type){
        case 'ADD-RATE': 
        return {...state, rates : [...state.rates, {id : Date.now(), firstDevise : action.firstDevise, secondDevise : action.secondDevise , rate : action.rate}]}

        case 'REMOVE-RATE':
        return {rates : state.rates.filter(rate => rate.id !== action.rate)}
    }
}

function RateConverter(){

    const [state, dispatch] = useReducer(reducer, initialState)
    const [rate, setRate] = useState('')
    const [firstDevise, setFirstDevise] = useState()
    const [secondDevise, setSecondDevise] = useState()
    const [amount, setAmount] = useState('')
    const [result, setResult] = useState('')


    const HandleInputRate = (e)=>{
        setRate(e.target.value)
    }

    const AddDevise = ()=>{
        dispatch({type : 'ADD-RATE', firstDevise : firstDevise, secondDevise : secondDevise, rate : rate})
    }

    const SelectFirstDevise = (e)=>{
        setFirstDevise(e.target.value)
    }
    const SelectSecondDevise = (e)=>{
        setSecondDevise(e.target.value)
    }
    const SelectAmount =(e)=>{
        setAmount(e.target.value)
    }

    const Convert = ()=>{
        const conversionRate = state.rates.find(rate =>
            rate.firstDevise === firstDevise && rate.secondDevise === secondDevise
          );
        
          if (conversionRate) {
            const convertedAmount = parseFloat(amount) * conversionRate.rate;
            setResult(convertedAmount);
          } else {
            setResult('Conversion rate not available');
          }
    }

    return(
        <>
        <div>
            <h2>Add</h2>
            <input onChange={SelectFirstDevise} type="text" placeholder="Select a devise" style={{padding : '12px'}} /> : 
            <input onChange={SelectSecondDevise} type="text" placeholder="Select a devise" style={ {padding : '12px'}}/> =
            <input onChange={HandleInputRate} type="text" placeholder="Select a rate" style={ {padding : '12px'}} /><br />
            <button onClick={AddDevise}>Add devise</button>
        </div>
        <div>
            <h2>Convert</h2>
            <input onChange={SelectFirstDevise} type="text" placeholder="Select a first devise"  />
            <input onChange={SelectSecondDevise} type="text" placeholder="Select a 2nd devise"  />
            <input onChange={SelectAmount} type="text" placeholder="Select an amount" /><br />
            <button onClick={Convert}>Convert</button>
            <h3>{result}</h3>
        </div>
        </>
    )
}

export default RateConverter