import React from 'react';

function RecipeCard({searchResults}) {
    if (!searchResults) {
        return null;
    }
  return (
        <div>
            <h2>{searchResults.results[0].title || 'No title' }</h2>
            <p>Time to Cook : {searchResults.results[0].readyInMinutes}</p>
            <div className="row">
                <div className="col">
                <p>Instructions</p>
                <ul className="instructions">
                {searchResults && searchResults.results[0].analyzedInstructions[0].steps.map((step, index) => (
                    <li key={index}>{step.step}</li>
                ))}
                </ul>
                 </div>
                <div className="col">
                <p>Ingredients</p>
                <ul className="ingredients">
                    {searchResults.results[0].extendedIngredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.original}</li>
                    ))}
                </ul>
                    
                    
                </div>

        </div>
        </div>
    )
}

export default RecipeCard;