import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Search from '../search'
//class="sg-col-inner"
//class="s-result-list s-search-results sg-row"
function App() {
  const [search, setSearch] = useState("")
  return (
    <div className="App">
      <Search 
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
