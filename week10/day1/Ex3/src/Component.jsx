import { useState, useReducer } from "react";


const TodoReducer = (state, action)=>{

    switch(action.type){
        case 'ADD_TODO' : 
        return [...state, {id : Date.now(), text : action.text}];

        case 'REMOVE_TODO' :
            return state.filter(todo =>todo.id !== action.id);

    }
}

function TodoList (){

    const [todos, dispatch] = useReducer(TodoReducer, [])
    const [todoText, setTodoText] = useState()

    const AddTodo = ()=>{
        dispatch({type : 'ADD_TODO', text : todoText})
        setTodoText('')
    }

    const RemoveTodo = (id)=>{
        dispatch({type : 'REMOVE_TODO', id})
    }

    return (
        <div>
          <h1>Todo List</h1>
          <input
            type="text"
            placeholder="Add a new todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <button onClick={AddTodo}>Add Todo</button>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.text}
                <button onClick={() => RemoveTodo(todo.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default TodoList