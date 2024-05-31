import {createSlice} from '@reduxjs/toolkit'

const initialState={
    crdt:0,
    debt:0, 
    balanc:0
}

const expenceSlice=createSlice({
    name:'expense',
    initialState,
    reducers:{
        credit(state,action){
            state.balanc=state.balanc + parseFloat(action.payload)
            state.crdt=state.crdt + parseFloat(action.payload)
        },

        debit(state,action){
            state.balanc=state.balanc-parseFloat(action.payload)
            state.debt=state.debt+parseFloat(action.payload)
        }
        }
})

export const {credit,debit}=expenceSlice.actions
export default expenceSlice.reducer

