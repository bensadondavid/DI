import { useState } from "react"


const Form = ()=>{

    const [input, setInput] = useState()
    const [data, setData] = useState()

    const HandleInput = (e)=>{
        setInput(e.target.value)

    }

    const HandleSubmit =(e)=>{
        e.preventDefault()
        console.log(input)
        Post()
    }

    const Post = async ()=>{
        try{
            const response = await fetch('http://localhost:4000/api/world',{
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify({input})
                    }
                )
            const data = await response.json()
            setData(data)
            console.log(data);
            }

        catch(err){
            console.log(err);
        }
    }

    return(
        <>
        <form onSubmit={HandleSubmit}>
            <input onChange={HandleInput} type="text" /><br />
            <button type="submit">Submit</button>
        </form>
        {data && <h1> {data.mess} </h1>}
        </>
    )

}

export default Form