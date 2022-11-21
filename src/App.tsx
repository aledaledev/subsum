import { useState } from 'react'
import './App.css'

function App() {

  // acepta genericos que definimos
  const [number, setNumber] = useState<number | string>(4)

  const changeNumber = () => {
    setNumber("2")
  }

  return (
  <div className='App'>
    {number}
    <button onClick={() => changeNumber()}>change number</button>
  </div>);
}

export default App
