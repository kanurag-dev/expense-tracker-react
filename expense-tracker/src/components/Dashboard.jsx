import React, { useEffect, useState } from 'react'
import Summary from './SummaryCards/Summary'
import './Dashboard.css'
import SearchBar from './SearchBar/SearchBar'
import ExpenseRow from './ExpenseList/ExpenseRow'
import ExpenseModal from './AddExpenseModal/ExpenseModal'


const Dashboard = () => {
  const [budget, setBudget] = useState(0)
  const [IsModal, setIsModal] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [search,setSearch]=useState("");
  const spent = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const remaining = budget - spent;

  const filteredTransactions=expenses.filter((elem)=>{
    const searchMatch=elem.name.toLowerCase().includes(search.toLowerCase())
    return searchMatch;
  })


  function transactionsno() {

    const size = expenses.length;
    return size;
  }
  function handleDelete(id){
    setExpenses(prev=>prev.filter(expense=>expense.id!==id))
  }
  console.log(search)

  return (
    <div className='dashboard-container'>
      <div className="summary-container">
        <Summary title="Budget" value={budget} setBudget={setBudget} editable={true} />
        <Summary title="Remaining" value={remaining} />
        <Summary title="Spent" value={spent} />
        <Summary title="Transactions" value={transactionsno()} />
      </div>
      <div className="toolbar">
        <SearchBar setSearch={setSearch}/>
        <button onClick={() => { setIsModal(true) }}>Add+</button>

      </div>
      {IsModal ? <ExpenseModal setExpenses={setExpenses} onClose={() => setIsModal(false)} /> : null}

      <div className="expense-rows">
        

        {filteredTransactions.map((expense) => (
          <ExpenseRow expense={expense} key={expense.id} ondelete={handleDelete} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard