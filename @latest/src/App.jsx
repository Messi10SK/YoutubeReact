import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <h1 className='bg-green-400 text-black p-4 rounded-xl '>Tailwind</h1>
     <Card username='Satyam' />
     <Card username = 'Kanojiya'/>
    </>
  )
}

export default App
