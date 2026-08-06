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
        <h3 className='title'>{props.title}</h3>
        <p className='amount-value'>{props.value}</p>
      </div>
    )
  }
  return (
    editing ?
      (<div className='card-container' >
        <h3 className='title'>{props.title}</h3>
        <input type="number" value={props.value} onChange={inputChangeHandler} onBlur={()=>setEditing(false)} 
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setEditing(false)
          }
        }
        } />
      </div>) :
      (<div className='card-container' onClick={edit}>
        <h3 className='title'>{props.title}</h3>
        <p className='amount-value'>{props.value}</p>
      </div>)
  )
}
export default Summary