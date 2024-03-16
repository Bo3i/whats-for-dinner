import { useState } from 'react'
import './App.css'
import React from 'react'
import SearchBar from './search-area'
import RecipeCard from './recipe-card'


function App() {
  const [response, setResponse] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [selectedMeal, setSelectedMeal] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedType, setSelectedType] = useState('');
  
  return (
    <div>
        <h1>What's for dinner?</h1>
        <SearchBar inputValue = {inputValue} setInputValue = {setInputValue} selectedMeal = {selectedMeal} setSelectedMeal = {setSelectedMeal} selectedTime = {selectedTime} setSelectedTime = {setSelectedTime} selectedType = {selectedType} setSelectedType = {setSelectedType} setResponse={setResponse}  />
        <ul>
          <li>inputValue: {inputValue}</li>
          <li>selectedMeal: {selectedMeal}</li>
          <li>selectedTime: {selectedTime}</li>
          <li>selectedType: {selectedType}</li>
          <li>response: {response}</li>
        </ul>
        <RecipeCard />
    </div>
  );
}

export default App;

