import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'
import SearchBar from './search-area'
import RecipeCard from './recipe-card'


function App() {
  const [currentSearch, setCurrentSearch] = useState('');
  
  return (
    <div>
        <h1>What's for dinner?</h1>
        <SearchBar />
        <RecipeCard />
    </div>
  );
}

export default App;

