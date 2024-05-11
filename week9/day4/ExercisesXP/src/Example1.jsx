import data from './file2.json'
import React from 'react'

class Example1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            SocialMedias : data.SocialMedias
        }
        console.log(data)
    }

    render(){

        const media = data.SocialMedias.map(media=>{
            return(<h3>{media}</h3>)
        })
        
    }
}

export default Example1