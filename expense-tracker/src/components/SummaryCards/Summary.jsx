import React, { useState } from 'react'
import './Summary.css'

const Summary = (props) => {
  const [editing, setEditing] = useState(false)
  function edit() {
    setEditing(true)
  }
  function inputChangeHandler(e) {
    props.setBudget(e.target.value);
  }


  if (!props.editable) {
    return (
      <div className='card-container'>
        <label className='title'>{props.title}</label>
        <p className='amount-value'>{props.value}</p>
      </div>
    )
  }
  return (
    editing ?
      (<div className='card-container' >
        <label className='title'>{props.title}</label>
        <input type="number" value={props.value} onChange={inputChangeHandler} onBlur={()=>setEditing(false)} 
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setEditing(false)
          }
        }
        } />
      </div>) :
      (<div className='card-container' onClick={edit}>
        <label className='title'>{props.title}</label>
        <p className='amount-value'>{props.value}</p>
      </div>)
  )
}
export default Summary