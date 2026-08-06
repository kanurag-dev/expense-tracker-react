import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard'
import ExpenseModal from './components/AddExpenseModal/ExpenseModal'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <Dashboard />
    </div>
  )
}

export default App
