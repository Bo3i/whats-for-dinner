import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function SearchBar({setResponse}) {
    
    const [inputValue, setInputValue] = useState('');
    const [selectedMeal, setSelectedMeal] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
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
                    query: inputValue || 'chicken',
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
                    console.log('fetching data');
                    const response = await axios.request(options);
                    setResponse(response.data);
                    console.log(response.data);
                } catch (error) {
                    console.error(error);
            }
        };
        fetchData();
    }, [clicked]
    );
    

    return (
      <form>
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Main ingredient..." />
      <button type="submit" onClick={handleClick}>Search</button>
        <div className="row">
            <div className="col">
                <p>Meal</p>
                <ul>
                    <li><input type="radio" name="meal" value="breakfast" onChange={e => setSelectedMeal(e.target.value)} /> Breakfast</li>
                    <li><input type="radio" name="meal" value="main course" onChange={e => setSelectedMeal(e.target.value)}  /> Dinner</li>
                    <li><input type="radio" name="meal"  value="soup" onChange={e => setSelectedMeal(e.target.value)}  /> Soup</li>
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
           
        </div>
        <ul>
            
        </ul>
      </form>
    );
  }

  export default SearchBar;