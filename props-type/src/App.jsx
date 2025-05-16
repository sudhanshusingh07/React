import react from 'react'
import './App.css'
import Welcome from './components/Welcome' 
import Count from './components/Count' 

function App() {
 

  return (
    <>
    <Welcome name="rain" /> {/*Passing the 'name' prop to the Welcome component */}
    <Count /> 
      </>
  )
}

export default App
