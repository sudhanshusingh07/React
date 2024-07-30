import { useState } from 'react'



function App() {
  let [count, setCount] = useState(15)

const addvalue=()=>{
 setCount(count+1);
}

const subvalue=()=>{
  setCount(count-1);
 }
  return (
    <>
    <h1>counter value:{count}</h1>
    
    <button onClick={addvalue}
    >add value</button>
    <br />
    <button onClick={subvalue}>remove value</button>
    </>
  )
}

export default App
