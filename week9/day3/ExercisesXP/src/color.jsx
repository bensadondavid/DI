import React from 'react'
import { useState } from 'react'


class Color extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            color : 'red',
            show : true
        }
    }

ChangeColor = ()=>{
    this.setState({
        color : 'blue'
    })
}

shouldComponentUpdate(nextProps, nextState) {
    return true
}

componentDidUpdate(){
    console.log("after update")
}

getSnapshotBeforeUpdate(){
    console.log("in getSnapshotBeforeUpdate")
    return null
}

    render (){
        return(
            <>
           <h2>My favorite color is {this.state.color} </h2>
           <button onClick={this.ChangeColor}>change color</button>
            </>
        )
    }
}

class Child extends React.Component{
    constructor(){
        super()
        this.state = {
            show : true
        }
    }
    componentWillUnmount(){
        alert('The component is about to be unmounted')
    }

    ChangeValue = ()=>{
        this.setState({
            show : false
        })
        console.log(this.state.show);
    }

    render(){
        return(
            <>
            {this.state.show ? <h2>Hello World</h2> : ''}
            <button onClick={this.ChangeValue}>Delete</button>
            </>
        )
    }
}

export default Color
export {Child}