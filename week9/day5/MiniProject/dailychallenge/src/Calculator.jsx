import { useState } from "react"


const Calculator = ()=>{

    const [FirstNumber, setFirstNumber] = useState()
    const [SecondNumber, setSecondNumber] = useState()
    const [operation, setOperation] = useState()
    const [resultOP, setResultOP] = useState()



    const HandleOperation = (e)=>{
        if(operation == 'add'){
       const result = Number(FirstNumber) + Number(SecondNumber)
       console.log(result);
       setResultOP(result)
        }
        else if(operation == 'substract'){
            const result = Number(FirstNumber) - Number(SecondNumber)
            console.log(result);
            setResultOP(result)
        }
        else if(operation == 'multiply'){
            const result = Number(FirstNumber) * Number(SecondNumber)
            console.log(result);
            setResultOP(result)
        }
        else if(operation == 'divise'){
            const result = Number(FirstNumber) / Number(SecondNumber)
            console.log(result);
            setResultOP(result)
        }
    }




    return(
        <>
        <div className="container">
            <h1 style={{fontSize : '40px'}}>Welcome on Calculator</h1>
            <select className="select" name="operations" id="operations" onChange={(e)=>{setOperation(e.target.value)}}>
                    <option>Select an operation</option>
                    <option value='add' >Add</option>
                    <option value='substract'>Substract</option>
                    <option value='multiply' >Multiply</option>
                    <option value='divise'>Divise</option>
            </select>

            <h3>Operation beetween 2 numbers</h3>

            <div className="fields">
                <input onChange={(e)=>{setFirstNumber(e.target.value)}} type="number" />
                <input onChange={(e)=>{setSecondNumber(e.target.value)}} type="number" /><br />
            </div>
            <button onClick={HandleOperation}>Operation</button>
            <h1> {resultOP} </h1>

        </div>

        </>
    )
}

export default Calculator