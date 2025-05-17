import React,{useContext} from 'react'
import { counterContext } from '../context/Context'

function Comp() {
  const count = useContext(counterContext);
  return (
    
    <div>Count is {count.count}</div>
  )
}

export default Comp