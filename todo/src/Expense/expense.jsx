import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { credit, debit } from './expenseSlice';

const expense = () => {
    const [input, setInput]=useState(0)
    const {balanc, crdt, debt}=useSelector(state=>state.expense)
    const dispatch = useDispatch();
    const handleInput=(e)=>{
        setInput(e.target.value)
    }

    const handleAddCredit=()=>{
        dispatch(credit(input))
        setInput(0)
    }

    const handleDebit=()=>{
        dispatch(debit(input))
        setInput(0)
    }

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 m-5">
            <h1 className="text-2xl font-bold text-center">{balanc}</h1>
            <p className="text-center">{crdt}/{debt}</p>
            <div className="flex flex-col space-y-2">
                <input 
                    type="number" 
                    value={input} 
                    onChange={handleInput} 
                    className="border border-gray-300 p-2 rounded-md"
                />
                <button 
                    onClick={handleAddCredit} 
                    className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    Add Credit
                </button>
                <button 
                    onClick={handleDebit} 
                    className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >Debit</button>
            </div>
        </div>
    );
};


export default expense
