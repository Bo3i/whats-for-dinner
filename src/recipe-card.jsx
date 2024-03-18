import React from 'react';

function RecipeCard({searchResults}) {
    if (!searchResults) {
        return null;
    }
  return (
        <div className='recipe-card'>
            <h2>{searchResults.results[0].title || 'No title' }</h2>
            <p className='summary'>Time to Cook : {searchResults.results[0].readyInMinutes} | Servings: {searchResults.results[0].servings} | Calories per serving: {} </p>
            <div className="row-rec">
                
                <div className='row'>
                <div className="col">
                <p className='title'>Ingredients</p>
                <ul className="ingredients">
                    {searchResults.results[0].extendedIngredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.original}</li>
                    ))}
                </ul>
                </div>
                <div className="d-img">
                <img className = "d-img" src={searchResults.results[0].image} alt={searchResults.results[0].title} />
                </div>
                </div>
                <div className="col-rec">
                <p className='title'>Instructions</p>
                <ul className="instructions">
                {searchResults && searchResults.results[0].analyzedInstructions[0].steps.map((step, index) => (
                    <li key={index}>{step.step}</li>
                ))}
                </ul>
                 </div>
        </div>
        </div>
    )
}

export default RecipeCard;