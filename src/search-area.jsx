import React, { useState } from 'react';
import './App.css';


function SearchBar({ inputValue, setInputValue, selectedMeal, setSelectedMeal, selectedTime, setSelectedTime, selectedType, setSelectedType}) {
    
    const handleClick = () => {
        console.log('Button clicked!');
        console.log('Input value:', inputValue);
        console.log('Selected meal:', selectedMeal);
        console.log('Selected time:', selectedTime);
        console.log('Selected type:', selectedType);
        const url = 'https://api.spoonacular.com/recipes/complexSearch';
    };
    return (
      <form>
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Search..." />
      <button type="submit" onClick={handleClick}>Search</button>
        <div className="row">
            <div className="col">
                <p>Meal</p>
                <ul>
                    <li><input type="radio" name="meal" value="Breakfast" onChange={e => setSelectedMeal(e.target.value)} /> Śniadanie</li>
                    <li><input type="radio" name="meal" value="Dinner" onChange={e => setSelectedMeal(e.target.value)}  /> Obiad</li>
                    <li><input type="radio" name="meal"  value="Supper" onChange={e => setSelectedMeal(e.target.value)}  /> Kolacja</li>
                </ul>
            </div>
            <div className="col">
                <p>Prepare time</p>
                 <ul>
                    <li><input type="radio" name="time"  value="30" onChange={e => setSelectedTime(e.target.value)}  /> up to 30 min</li>
                    <li><input type="radio" name="time"  value="60" onChange={e => setSelectedTime(e.target.value)}  /> up to 1h</li>
                    <li><input type="radio" name="time"  value="120" onChange={e => setSelectedTime(e.target.value)}  /> 2h and longer</li>
                </ul>
            </div>
            <div className="col">
                <p>Meal types</p>
                 <ul>
                    <li><input type="radio" name="type"  value="Vegetarian" onChange={e => setSelectedType(e.target.value)}  /> Vege</li>
                    <li><input type="radio" name="type"  value="Meat" onChange={e => setSelectedType(e.target.value)}  /> Meat</li>
                    <li><input type="radio" name="type"  value="Soup" onChange={e => setSelectedType(e.target.value)}  /> Soups</li>
                </ul>
            </div>
        </div>
        <ul>
            
        </ul>
      </form>
    );
  }

  export default SearchBar;