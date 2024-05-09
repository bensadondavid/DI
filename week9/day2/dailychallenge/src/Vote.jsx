import { useState } from "react"

const Vote = ()=>{

    const [languages, setLanguages] = useState([
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
      ])

      const ChangeVote = (index)=>{
            setLanguages( languages.map((language, idx)=>{
                if(idx === index){
                    return({...language, votes: language.votes + 1})
                }
                return language
            }))
      }

      return(
        <>
        <ol>
           {languages.map((language, index) =>{
            return (
                <>
                <div key={index}>
                <li> Language : {language.name} Votes : {language.votes} </li>
                <button onClick={()=>(ChangeVote(index))}> Vote Me !</button>
                </div>
                </>
           )
           })}
        </ol>

        </>
      )
}

export default Vote