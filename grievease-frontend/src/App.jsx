import { useState } from 'react'
import './App.css'
import LandingPage from './pages/Landingpage/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
       <LandingPage/>
      </div>
    </>
  )
}

export default App
