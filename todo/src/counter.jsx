import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Counter/counterSlice'

export const counter = () => {
    const counter=useSelector(state=>state.counter)
    const dispatch=useDispatch()
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={()=>dispatch(increment())}></button>
        <button onClick={()=>dispatch(decrement())}></button>
        
    </div>
  )
}
export default counter