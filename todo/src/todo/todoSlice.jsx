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
        
        // edittodo(state,action){
        //     state.todos=state.todos.map((todo)=>{
        //         if(todo.id===action.payload.id){
        //             todo.text=action.payload.text
        //         }
        //         return todo
        //     })
        // }
    }

})

export const {addtodo,deletetodo,edittodo}=todoSlice.actions
export default todoSlice.reducer