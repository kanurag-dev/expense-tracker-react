import React from 'react'
import './ExpenseModal.css'

const ExpenseModal = (props) => {
  return (
    <div className="modal-overlay">
      <div className='expense-container'>
        <div className="transaction-info">
          <label>Name: <input type="text" /></label>
          <label>Food: <input type="text" /></label>
          <label>Amount: <input type="number" /></label>
          <label>Date: <input type="date" /></label>
        </div>

        <div className="save-cancel">
          <button onClick={props.onClose}>Save</button>
          <button onClick={props.onClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default ExpenseModal