import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

fetch('http://localhost:8080/api/v1/movies')
    .then(response => response.json())
    .then(data => console.log(data))

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="outer-div">

      </div>
  )

}
export default App
