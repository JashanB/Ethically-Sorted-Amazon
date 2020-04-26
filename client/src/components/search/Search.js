import React, { useEffect, useState } from 'react'
import axios from 'axios'

// async function fetchData() {
//   try {
//     const placesArray = [];
//     const placesData = await axios.get(`http://localhost:3001/users/${id}`)
//     for (let place of placesData.data.places) {
//       const placeObject = {
//         name: place.name,
//         id: place.id,
//         latitude: parseFloat(place.latitude),
//         longitude: parseFloat(place.longitude)
//       }
//       placesArray.push(placeObject)
//     }
//     setAllPlaces(state => ({
//       places: [...allPlaces.places, ...placesArray]
//     }))
//     setOnRender(state => ({
//       places: [...allPlaces.places, ...placesArray]
//     }))
//   } catch (error) {
//     console.error(error)
//   }
// }

export default function Search(props) {
  //search form that splits input by spaces and makes axios call 
  //https://www.amazon.com/s?k=hand+cream&page=3&qid=1586824474&ref=sr_pg_3
  //https://www.amazon.com/s?k=hand+cream&page=3 works too - only need this information 
  //can set this to go to like 50 but only function if data returned 

  //need form - use state, state changes when form value changes
  //on submit - make axios call to get data 
  const [error, setError] = useState("");
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search === '') {
      setError(state => 'Search form cannot be blank');
    } else {
      searchItems(search);

    }
  }

  async function searchItems(string) {
    try {
      const searchTerms = string.split(' ').join('+');
      const placesArray = [];
      const searchData = await axios.get(`https://www.amazon.com/s?k=${searchTerms}`)
      console.log('search data', JSON.parse(searchData.data))
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="text"
          name={search}
          placeholder="Search here"
          onChange={(event) => {
            setSearch(event.target.value)
            setError('');
          }
          }
          value={search}
        />
        <section className="search-validation">{error}</section>
      </form>
    </div>
  )
}