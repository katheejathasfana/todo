import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [parent, setParent]=useState('')
    
    const callback=(data)=>{
        setParent(data)
    }
  return (
    <div>
      <h1 className='text-lg font-semibold'>{parent}</h1>
      <Child onData={callback}/>
    </div>
  )
}

export default Parent
