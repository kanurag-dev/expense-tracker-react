import React, { useEffect, useState } from 'react'
import Summary from './SummaryCards/Summary'
import './Dashboard.css'
import SearchBar from './SearchBar/SearchBar'
import ExpenseRow from './ExpenseList/ExpenseRow'
import ExpenseModal from './AddExpenseModal/ExpenseModal'


const Dashboard = () => {
  const[budget,setBudget]=useState(0)
  const [IsModal,setIsModal]=useState(false)
  const [expenses,setExpenses]=useState([])

  function remainingfunc(){
    
    const total = expenses.reduce((acc,curr)=>{
      return acc+curr.amount;
    },0)
    const remainingAmount=budget-total;
    return remainingAmount;
  }
  function spentfunc(){
    
    const spent = expenses.reduce((acc,curr)=>{
      return acc+curr.amount;
    },0)
    return spent;
  }
   function transactionsno(){
    
    const size = Object.keys(expenses).length;
    return size;
  }
  
  return (
    <div className='dashboard-container'>
      <div className="summary-container">
        <Summary title="Budget" value={budget} setBudget={setBudget} editable={true} />
        <Summary title="Remaining" value={remainingfunc()} />
        <Summary title="Spent" value={spentfunc()} />
        <Summary title="Transactions" value={transactionsno()} />
      </div>
      <div className="toolbar">
        <SearchBar/>
        <button onClick={()=>{setIsModal(true)}}>Add+</button>

      </div>
      {IsModal?<ExpenseModal setExpenses={setExpenses} onClose={()=>setIsModal(false) }/>:null}
      
      <div className="expense-rows">
        
      {expenses.map((expense)=>(
        <ExpenseRow expense={expense} key={expense.id}/>
      ))}
      </div>
    </div>
  )
}

export default Dashboard