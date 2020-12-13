import React from 'react'

const Search = ({ handleSearchChange }) => {
  return (
    <div className="search-wrap">
      <span className="search-span">Search </span>   <input type="search" placeholder="Search an employee" onChange={handleSearchChange} />
    </div>
  )
}

export default Search
