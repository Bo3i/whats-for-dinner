import { useState } from 'react'
import './App.css'
import React from 'react'
import SearchBar from './search-area'
import RecipeCard from './recipe-card'


function App() {
  const [response, setResponse] = useState(null);
  
  
  return (
    <div>
        <SearchBar setResponse={setResponse}  />
        <RecipeCard searchResults = {response}/>
        <footer>Created by Jakub Kindlik</footer>
    </div>
  );
}

export default App;

