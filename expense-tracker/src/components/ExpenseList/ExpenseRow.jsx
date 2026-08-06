import React from 'react'
import './ExpenseRow.css'

const ExpenseRow = ({expense}) => {
  return (
    <div className='expense-row'>
        <p>{expense.name}</p>
        <p>{expense.category}</p>
        <p>{expense.amount}</p>
        <p>{expense.date}</p>
        
    </div>
  )
}

export default ExpenseRow