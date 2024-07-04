import { useState, useReducer } from "react"


const inititalState = {tasks : []}

const reducer = (state, action) =>{
    switch(action.type){
        case 'ADD-TODO':
            return {...state, tasks : [...state.tasks, {id : Date.now(), text : action.text}]}
        
        case 'REMOVE-TODO':
            return {...state, tasks : state.tasks.filter(task => task.id !== action.id)}
    }
}


function NewTodo(){

    const [input, setInput] = useState('')
    const [state, dispatch] = useReducer(reducer, inititalState)

    const HandleInput = (e)=>{
        setInput(e.target.value)
    }

    const AddTask = ()=>{
        dispatch({type : 'ADD-TODO', text : input })
        setInput('')
    }

    const RemoveTask = (id)=>{
        dispatch({type : 'REMOVE-TODO', id})
    }


    return(
        <div>
            <input type="text" onChange={HandleInput} value={input} />
            <button onClick={AddTask}>Add Task</button>
            <ul>
            {state.tasks.map((task)=>(
                 <li key={task.id}>
                 {task.text}
                 <button onClick={()=>RemoveTask(task.id)}>Remove Task</button>
             </li>
            )
            )}
            </ul>
        </div>
    )
}

export default NewTodo