import React from 'react'

import './SearchBar.css'


const SearchBar = (props) => {
  function handleInput(e){
    props.setSearch(e.target.value)
    
  }
  return (
    <div className='search-container'>
        <input onChange={handleInput} className='search-input' type="text" placeholder='search'/>
        
        
    </div>
    
  )
}

export default SearchBar