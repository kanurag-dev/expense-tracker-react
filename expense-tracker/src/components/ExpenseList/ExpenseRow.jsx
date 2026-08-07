import React from 'react'
import './ExpenseRow.css'

const ExpenseRow = ({ expense, ondelete,onedit }) => {
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
      <button
        className="edit-btn"
        onClick={() => onedit(expense)}
      >Edit</button>

    </div>
  )
}

export default ExpenseRow