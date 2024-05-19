import { useReducer, useState } from "react"

const initialState = {tasks :[]}

const todoReducer = (state, action)=>{
    switch(action.type){
        case 'ADD-TODO':
            console.log(action.text);
       return {tasks : [...state.tasks, {id : Date.now(), text : action.text}]}
        case 'REMOVE-TODO':
        return {tasks : state.tasks.filter(task => task.id !== action.id)}
        default:
    }
}


function Todo(){
    const [inputText, setInputText] = useState('')
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const HandleInput = (e)=>{
        setInputText(e.target.value)
    }

    const AddTask = ()=>{
        dispatch({type : 'ADD-TODO', text : inputText})
    }
    const RemoveTask = (id)=>{
        dispatch({type : 'REMOVE-TODO', id})
    }

    return(
        <div>
            <input onChange={HandleInput} type="text" />
            <button onClick={AddTask}>Add Task</button>
            <ul>
                {state.tasks.map((task)=>(
                    <li key={task.id}>
                    {task.text}
                    <button onClick={()=>RemoveTask(task.id)}>Remove Task</button>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo