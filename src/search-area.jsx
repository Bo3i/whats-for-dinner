import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function SearchBar({setResponse}) {
    
    const [inputValue, setInputValue] = useState('');
    const [selectedMeal, setSelectedMeal] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [clicked, setClicked] = useState('');

    const handleClick = () => {
        if (inputValue === '') {
            alert('Please enter the main ingredient');
            return;
        }
        setClicked(clicked + 1);
    };
    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
                params: {
                    query: inputValue,
                    type: selectedMeal || 'main course',
                    instructionsRequired: 'true',
                    fillIngredients: 'true',
                    addRecipeInformation: 'true',
                    maxReadyTime: selectedTime || '60',
                    ignorePantry: 'true',
                    sort: 'random',
                    sortDirection: 'asc',
                    offset: '0',
                    number: '1',
                    limitLicense: 'false',
                    ranking: '2'
                },
                headers: {
                    'X-RapidAPI-Key': '4cd243d0e8msh19038a6b43a043dp154e08jsndcf6fd04ef1e',
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                  }
                };
                

                try {
                    if (inputValue === '') {
                        return;
                    }
                    const response = await axios.request(options);
                    if (response.data.results.length === 0) {
                        alert('No recipes found. Please try again.');
                        return;
                    }
                    setResponse(response.data);
                } catch (error) {
                    console.error(error);
            }
        };
        fetchData();
    }, [clicked]
    );
    

    return (
      <form className='search-area' onSubmit={handleClick}>
        <h1>What's for dinner?</h1>
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={e => {if (e.key === 'Enter') {
            e.preventDefault();
            handleClick();
            }
            }} placeholder="Main ingredient..." />
      <button type="button" onClick={handleClick}>Search</button>
        <div className="row">
            <div className="col">
                <p className='title'>Meal</p>
                <ul>
                    <li><input type="radio" name='meal' value="breakfast" onChange={e => setSelectedMeal(e.target.value)} /> Breakfast</li>
                    <li><input type="radio" name='meal' value="main course" onChange={e => setSelectedMeal(e.target.value)}  /> Dinner</li>
                    <li><input type="radio" name='meal' value="dessert" onChange={e => setSelectedMeal(e.target.value)}  /> Dessert</li>
                </ul>
            </div>
            <div className="col">
                <p className='title'>Prepare time</p>
                 <ul>
                    <li><input type="radio" name='time' value="30" onChange={e => setSelectedTime(e.target.value)}  /> up to 30 min</li>
                    <li><input type="radio" name='time' value="60" onChange={e => setSelectedTime(e.target.value)}  /> up to 1h</li>
                    <li><input type="radio" name='time' value="120" onChange={e => setSelectedTime(e.target.value)}  /> 2h and longer</li>
                </ul>
            </div>
        </div>
        <ul>
            
        </ul>
      </form>
    );
  }

  export default SearchBar;