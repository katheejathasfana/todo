import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrmntBy5, reset } from './counterSlice';

export const counter = () => {
    const counter=useSelector(state=>state.counter.value)
    const dispatch = useDispatch();

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={()=>dispatch(increment())}>add</button>
        <button onClick={()=>dispatch(decrement())}>dec</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
        <button onClick={()=>dispatch(incrmntBy5(5))}>add by 5</button>
    </div>
  )
}
export default counter