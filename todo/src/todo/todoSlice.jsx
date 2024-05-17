import {createSlice} from '@reduxjs/toolkit'

const initialState={
todos:[]
}



const todoSlice=createSlice({
    name:'todo', 
    initialState,
    reducers:{
        addtodo(state,action){
            state.todos.push(action.payload)
        },
        deletetodo(state,action){
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },

        completetodo(state,action){
            const Todo=state.todos.find(todo=>todo.id==action.payload)
            if (Todo){
            Todo.completed=true
            }

        },
        
        edittodo(state,action){
            const {id, text}=action.payload
            const edit=state.todos.find(todo=>todo.id==id)
            if(edit){
                edit.text=text       
        }
    }
}})

export const {addtodo,deletetodo,edittodo, completetodo}=todoSlice.actions
export default todoSlice.reducer