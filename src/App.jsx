import { useState } from 'react'
import './App.css'
import React from 'react'
import SearchBar from './search-area'
import RecipeCard from './recipe-card'


function App() {
  const [response, setResponse] = useState(null);
  
  
  return (
    <div>
        <h1>What's for dinner?</h1>
        <SearchBar setResponse={setResponse}  />
        <RecipeCard searchResults = {response}/>
    </div>
  );
}

export default App;

