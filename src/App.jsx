import { useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [welcomeText, setWelcomeText] = useState("")
  const [welcomeResponse, setWelcomeResponse] = useState("")

  const welcomeHandler = async () => {
    const welcomeR = await axios.post("https://test-backend-taupe-six.vercel.app/api/welcome", { name: welcomeText })
    setWelcomeResponse(welcomeR?.data?.message)
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
