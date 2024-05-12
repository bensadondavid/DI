import { useEffect, useState } from 'react'
import quotes from './quotes.json'
import colors from './colors.json'

const Box = ()=>{

    const [quote, setQuote] = useState(quotes[0].quote)
    const [author, setAuthor] = useState(quotes[0].author)
    const [backgroundColor, setBackgroundColor] = useState()
    const [textColor, setTextColor] = useState()

    const HandleClick = ()=>{
        const RandomNumber = Math.floor(Math.random() * quotes.length)
        const RandomQuote = quotes[RandomNumber].quote
        const Author = quotes[RandomNumber].author
        console.log(RandomQuote);
        console.log(Author);
        setQuote(RandomQuote)
        setAuthor(Author)
        
    }

    const HandleColor = () =>{
        const RandomNumber = Math.floor(Math.random()* 9 + 1)
        const RandomBgColor = colors[RandomNumber].background
        const RandomTxtColor = colors[RandomNumber].text
        console.log(RandomBgColor, RandomTxtColor);
        setBackgroundColor(RandomBgColor)
        setTextColor(RandomTxtColor)
    }


    return(
    
        <>

        <div style={{backgroundColor : backgroundColor}} className='container'>
            
            <div style={{color : textColor}} className='divQuote'>
                <h2> "{quote}" </h2>
                <h5> {author} </h5>
            </div>
            
            <button onClick ={()=>{HandleClick(); HandleColor()}} className='button'>New Quote</button>
        </div>

        </>
    )
}

export default Box