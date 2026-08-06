import React from 'react'
import './Summary.css'

const Summary = (props) => {
  return (
    <div className='card-container'>
        <label className='title'>{props.title}</label>
        <p className='amount-value'>{props.value}</p>
    </div>
  )
}
export default Summary