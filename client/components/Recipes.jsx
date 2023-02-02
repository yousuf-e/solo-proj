//this will act as the main container for holding all the recipe cards
import '../stylesheets/styles.scss';
import React, { Component } from 'react';
import RecipeCard from './RecipeCard.jsx';
import AddRecipe from './AddRecipe.jsx';

class Recipes extends Component{
  constructor(props) {
    super(props);
  }
  
  render() {
    const { recipes, handleDelete } = this.props;
    const cards = recipes.map((recipe) => {
      return <RecipeCard
        name={recipe.name}
        directions={recipe.directions}
        description={recipe.description}
        key={recipe._id}
        id={recipe._id}
        handleDelete={handleDelete}
      />
    });
    console.log("🚀 ~ file: Recipes.jsx:18 ~ Recipes ~ cards ~ cards", cards)

    return (
      <div>
      {cards}
    </div>
    );
  }

}

export default Recipes;