import React from "react"

class Fetch extends React.Component{
    constructor(){
        super()
        this.state = {
            data : null
        }
    }

    FetchMessage = async ()=>{

        const url = "http://localhost:4000/api/hello"

        try{
            const response = await fetch(url)
            const data = await response.json()
            console.log(data);
            this.setState({data})
        }
        catch(error){
            console.log(error);
        }
    }

    componentDidMount(){
        this.FetchMessage()
    }

    render(){
        const {data} = this.state
        return(
        <h1> {data} </h1>
        )
    }
}

export default Fetch