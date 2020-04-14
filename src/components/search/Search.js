import React, { useEffect, useState } from 'react'

const handleSubmit = (event) => {
  event.preventDefault();
}

export default function Search(props) {
  //search form that splits input by spaces and makes axios call 
  //https://www.amazon.com/s?k=hand+cream&page=3&qid=1586824474&ref=sr_pg_3
  //https://www.amazon.com/s?k=hand+cream&page=3 works too - only need this information 
  //can set this to go to like 50 but only function if data returned 
  const [error, setError] = useState("")
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