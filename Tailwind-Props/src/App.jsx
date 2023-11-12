import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
const obje={
  username:"Kunal Singh",
  age:23
}
  return (
    <>
   <h1 className='bg-blue-400 text-white rounded-xl p-4 mb-4'>Tailwind</h1>
   <Card username="Kunal Singh" btnText='Visit me'/>
   <Card username="Atul Singh"/>
    </>
  )
}

export default App
