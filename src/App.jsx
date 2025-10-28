import { useState } from 'react'
import Component from './Component'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)
  return (
  
      <div>
        <Home/>
      </div>   
  )
}

export default App
