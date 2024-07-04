
import React from 'react'
import './exercise.css'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

class Exercise extends React.Component{
    render(){
        return(
            <>
        <h1 style={style_header}>Title</h1>
        <p className='para'>Paragraph</p>
        <a href='https://www.google.com/?client=safari'></a>
        <form>
            <input type="text" name="username" id="form" />
            <button>Submit</button>
        </form>
        <img src='/logo192.png'></img>
        <ul>
            <li>Welcome</li>
            <li>to</li>
            <li>React</li>
        </ul>
        </>
        )
    }
}

export default Exercise