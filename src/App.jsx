import { useState } from 'react'
import './App.css'

function App() {
  const [welcomeText, setWelcomeText] = useState("")
  const [welcomeResponse, setWelcomeResponse] = useState("")
    const welcomeHandler = async () => {

  }
  return (
  <>
      <div>
        <input onChange={(e) => setWelcomeText(e?.target?.value || "")} type="text" placeholder="Enter your name" />
        <button onClick={welcomeHandler}>Welcome</button>
        <p>{welcomeResponse || ""}</p>
      </div>
    </>
  )
}

export default App
