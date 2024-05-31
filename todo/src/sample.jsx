import React, { useState } from 'react'

export const sample = () => {
    const [amount,setAmount]=useState(0)
    const [input, setInput]=useState()
    const [transc, setTransc]=useState([])
    const [crdt, setCredit]=useState(0)
    const [dbt, setDebit]=useState(0)
    const [edit, setEdit]=useState('')

    const credit=()=>{
        const regex = /^[0-9]+$/; 
        if (!regex.test(input)){
            alert("enter the valid inputs")
        }
        else{
            const a=parseFloat(input)
            setAmount(a+amount)
            const trns={
                id:Date.now(),
                amnt:input,
                type:'credit'
            }
        setCredit(crdt+parseFloat(input))
        setTransc((prev)=>[...prev,trns])
        console.log(crdt)
        setInput('')
        
    } 
    }
    const debit=()=>{
        const a=parseFloat(input)
        setAmount(amount-a)
        const trans={
            id:Date.now(),
            amnt:input,
            type:'debit'
        }
        setDebit(dbt+parseFloat(input))
        setTransc((prev)=>([...prev,trans]))
        setInput('')
    }

    const update=(id)=>{
        const data=transc.find(trns=>trns.id==id)
        setInput(data.amnt)
        setEdit(id)
        setAmount(amount-data.amnt)
    }

    const handleupdated=()=>{
        transc.map(trns=>{
            if(trns.id==edit){
                trns.id=edit,
                trns.amnt=input
                setAmount(amount+parseFloat(trns.amnt))
            }
            return trns
            
        }
         )
         setInput('')
         setEdit(0)
    }

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className='text-lg font-semibold mb-4'>Balance: ${amount}</h1>
          <div className='flex'>
            <div className='px-20 py-4 border rounded-md flex-item center shadow-md text-lg font-semibold'>Credit ${crdt}</div>
            <div className='px-20 py-4 border rounder-md flex-item center shadow-md text-lg font-semibold'>Debit  ${dbt}</div>
          </div>
          
          <div className="mb-4">
            <input
              type="number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border border-gray-300 p-2 rounded-md w-full mb-2"
              placeholder="Type amount"
            />
            {edit? <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                onClick={handleupdated}
              >
                update
              </button> :
            <div className="flex space-x-2">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                onClick={() => credit()}
              >
                Credit
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={() => debit()}
              >
                Debit
              </button>
            </div>}
          </div>
          <div className="divide-y divide-gray-200">
            {transc.map((trn) => (
              <div key={trn.id} className="px-4 py-2 border rounded-md shadow-md mb-2  flex items-center justify-between">
                <span className="font-semibold">{trn.type}</span>: ${trn.amnt}
                <button onClick={()=>update(trn.id)}>update</button>
              </div>
             
            ))}
          </div>
        </div>
      );
    }
    
    export default sample;