import React, { useState } from 'react'
import Summary from './SummaryCards/Summary'
import './Dashboard.css'
import SearchBar from './SearchBar/SearchBar'
import ExpenseRow from './ExpenseList/ExpenseRow'
import ExpenseModal from './AddExpenseModal/ExpenseModal'


const Dashboard = () => {
  const[budget,setBudget]=useState(0)
  const [IsModal,setIsModal]=useState(false)
  const expenses=[{id:1,name:"pizza",category:"food",amount:100,date:"6aug"},
    {id:2,name:"car",category:"travel",amount:105,date:"4aug"},
    {id:3,name:"pizza",category:"food",amount:1060,date:"7aug"},
    {id:4,name:"salon",category:"hair",amount:10,date:"2aug"},
  ]
  return (
    <div className='dashboard-container'>
      <div className="summary-container">
        <Summary title="Budget" value={budget} setBudget={setBudget} editable={true} />
        <Summary title="Remaining" value={4000} />
        <Summary title="Spent" value={4000} />
        <Summary title="Transactions" value={4000} />
      </div>
      <div className="toolbar">
        <SearchBar/>
        <button onClick={()=>{setIsModal(true)}}>Add+</button>

      </div>
      {IsModal?<ExpenseModal onClose={()=>setIsModal(false)}/>:null}
      
      <div className="expense-rows">
        
      {expenses.map((expense)=>(
        <ExpenseRow expense={expense} key={expense.id}/>
      ))}
      </div>
    </div>
  )
}

export default Dashboard