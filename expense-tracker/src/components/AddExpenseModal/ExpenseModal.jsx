import React, { useEffect, useState } from 'react'
import './ExpenseModal.css'

const ExpenseModal = (props) => {
  const emptyExpense = {
    name: "",
    category: "",
    amount: "",
    date: ""
  };

  const [newExpense, setNewExpense] = useState(emptyExpense)
  useEffect(() => {
    if (props.editingExpense) {
      setNewExpense(props.editingExpense);
    } else {
      setNewExpense(emptyExpense);
    }
  }, [props.editingExpense]);

  const disabled = !newExpense.name ||
    !newExpense.category ||
    !newExpense.amount ||
    !newExpense.date;

  async function onSaveHandle(e) {
    if (props.editingExpense) {
      try {
        const res = await fetch(`https://expense-tracker-25yd.onrender.com/api/expenses/${props.editingExpense._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newExpense)
        });
        const data = await res.json();
        props.setExpenses(prev => prev.map((elem) => {
          if (elem._id === data._id) {
            return data;
          }
          else {
            return elem;
          }
        }))

        props.setEditingExpense(null)
        setNewExpense(emptyExpense);
        props.onClose();
      }catch(err){
        console.log(err)
      }
    }
    else {
      try {
        const res = await fetch("https://expense-tracker-25yd.onrender.com/api/expenses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }, body: JSON.stringify(newExpense)
        });
        const data = await res.json();
        props.setExpenses(prev => [...prev, data])
      } catch (err) {
        console.log(err)
      }
      props.onClose();

    }




  }
  function inputHandler(e) {
    setNewExpense({
      ...newExpense,
      [e.target.name]: e.target.value
    })

  }
  return (
    <div className="modal-overlay">
      <div className='expense-container'>
        <h2>Add Expense</h2>
        <div className="transaction-info">
          <label>Name: <input type="text" value={newExpense.name} onChange={inputHandler} name='name' /></label>
          <label>Category: <input type="text" value={newExpense.category} onChange={inputHandler} name='category' /></label>
          <label>Amount: <input type="number" value={newExpense.amount} onChange={inputHandler} name='amount' /></label>
          <label>Date: <input type="date" value={newExpense.date} onChange={inputHandler} name='date' /></label>
        </div>

        <div className="save-cancel">
          <button disabled={disabled} onClick={onSaveHandle}>Save Expense</button>
          <button onClick={props.onClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default ExpenseModal