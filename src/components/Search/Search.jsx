import React from 'react'
import { GrFormSearch } from "react-icons/gr";

const Search = ({setSearchText}) => {
  return (
    <div className='search'>
        <GrFormSearch className='search-icon'/>
        <input type="text" placeholder='Type to search...' className='input' onChange={(e)=>{
            setSearchText(e.target.value)
        }}/>
    </div>
  )
}

export default Search;