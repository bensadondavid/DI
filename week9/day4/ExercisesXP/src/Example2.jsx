import data from './file2.json'
import React from 'react'

class Example2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Experiences : data.Experiences
        }
    }

    render(){
        return(
            <>
            <h4> {this.state.Experiences[0]} </h4>
            <h4> {this.state.Experiences[1]} </h4>
            <h4> {this.state.Experiences[2]} </h4>
            </>
        )
        
    }
}

export default Example2