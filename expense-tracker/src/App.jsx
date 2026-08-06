import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    
    <Dashboard/>
    
    </>
  )
}

export default App
