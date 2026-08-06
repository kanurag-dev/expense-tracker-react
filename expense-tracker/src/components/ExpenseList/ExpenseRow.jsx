import React from 'react'
import './ExpenseRow.css'

const ExpenseRow = ({ expense, ondelete }) => {
  return (
    <div className="expense-row">

      <div className="expense-info">
        <h4>{expense.name}</h4>
        <p>{expense.category}</p>
      </div>

      <div className="expense-date">
        {expense.date}
      </div>

      <div className="expense-amount">
        ₹{expense.amount}
      </div>

      <button
        className="delete-btn"
        onClick={() => ondelete(expense.id)}
      >
        Delete
      </button>

    </div>
  )
}

export default ExpenseRow