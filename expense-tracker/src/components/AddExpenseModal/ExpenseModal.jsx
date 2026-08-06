import React, { useState } from 'react'
import './ExpenseModal.css'

const ExpenseModal = (props) => {
    const [newExpense,setNewExpense]=useState({
    name:"",
    category:"",
    amount:"",
    date:""
})
    function onSaveHandle(){
        props.setExpenses(prev=>[...prev,{...newExpense,id:Date.now(),amount:Number(newExpense.amount)}])
        props.onClose();
    }
    function inputHandler(e){
    setNewExpense({
        ...newExpense,
        [e.target.name]: e.target.value
    })
    
}
  return (
    <div className="modal-overlay">
      <div className='expense-container'>
        <div className="transaction-info">
          <label>Name: <input type="text" value={newExpense.name} onChange={inputHandler} name='name'/></label>
          <label>Category: <input type="text" value={newExpense.category} onChange={inputHandler} name='category'/></label>
          <label>Amount: <input type="number" value={newExpense.amount} onChange={inputHandler} name='amount'/></label>
          <label>Date: <input type="date" value={newExpense.date} onChange={inputHandler} name='date'/></label>
        </div>

        <div className="save-cancel">
          <button onClick={onSaveHandle}>Save</button>
          <button onClick={props.onClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default ExpenseModal