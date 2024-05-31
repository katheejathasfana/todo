import React, { useState } from 'react'

const Child = ({onData}) => {
    const [child, setChild]=useState('')
    const send=()=>{
        onData(child)
        setChild('')
    }

  return (
    <div>
        <input type="text" onChange={(e)=>setChild(e.target.value)} />
        <button onClick={send}>submit</button>
      
    </div>
  )
}

export default Child
