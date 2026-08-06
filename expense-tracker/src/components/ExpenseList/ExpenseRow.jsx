import React from 'react'
import './ExpenseRow.css'

const ExpenseRow = ({expense}) => {
  return (
    <ul className='expense-row'>
        <li>{expense.name}</li>
        <li>{expense.category}</li>
        <li>{expense.amount}</li>
        <li>{expense.date}</li>
        
    </ul>
  )
}

export default ExpenseRow