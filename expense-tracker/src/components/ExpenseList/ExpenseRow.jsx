import React from 'react'
import './ExpenseRow.css'

const ExpenseRow = ({expense,ondelete}) => {
  return (
    <div className='expense-row'>
        <p>{expense.name}</p>
        <p>{expense.category}</p>
        <p>{expense.amount}</p>
        <p>{expense.date}</p>
        <button onClick={()=>ondelete(expense.id)}>delete</button>
        
    </div>
  )
}

export default ExpenseRow