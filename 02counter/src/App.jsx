import { useState } from 'react'
import './App.css'

function App() {
 
const [count,Setcount] = useState(15)

const addValue =()=>{
  Setcount(count+1 < 20 ? count+1 : 20)
}


const removeValue =()=>{
  Setcount(count-1 > 0 ? count-1 : 0)
}

  return (
    <>

  <h1>Satyam Kanojiya</h1>

  <h2>Counter Value:{count}</h2>

  <button onClick={addValue}>Add Value</button>

  <br />

  <button onClick={removeValue}>remove Value</button>

    </>

  )
}

export default App;

