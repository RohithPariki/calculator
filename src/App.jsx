import { useState } from 'react'
import Simplecalculator from './Simple.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Simplecalculator/>
    </>
  )
}

export default App
