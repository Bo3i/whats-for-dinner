function RecipeCard({searchResults}) {
    if (!searchResults) {
        return null;
    }
  return (
        <div>
            <h2>{searchResults[0].title || ''}</h2>
            <p>Time to Cook</p>
            <ul className="ingredients">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
            </ul>
            <p>Instructions</p>
        </div>
    )
}

export default RecipeCard;