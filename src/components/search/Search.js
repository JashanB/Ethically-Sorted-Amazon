import React, { useEffect, useState } from 'react'

const handleSubmit = (event) => {
  event.preventDefault();
}

export default function Search(props) {
  //search form that splits input by spaces 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
    <input 
    type="text"
     name="name" 
     placeholder="Search here"
     onChange={(event) => {
      setSearch(event.target.value)
      setError('')}
    }
    value={name}
     />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}