import { useState } from 'react'
import { Card } from './components/Card.tsx'
import { Counter } from './components/Counter.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div>
         <Card
         name = "Shoes"
         price = {3000}
        />
      </div>

      <div>
         <Counter/>  
      </div>
    </>
  )
}

export default App
