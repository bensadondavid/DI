import { configureStore, createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name : 'todo',
    initialState : {tasks : []},
    reducers : {
        addTask : (state, action)=>{
            const newTask = {id : Date.now(), text : action.payload}
            state.tasks.push(newTask)
        }
    }
})

const store = configureStore({
    reducer : {
        todo : todoSlice.reducer
    }
})