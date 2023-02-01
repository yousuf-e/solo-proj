//this will act as the main container for holding all the recipe cards

import React, { Component } from 'react';
import RecipeCard from './RecipeCard.jsx';

class Recipes extends Component{
  constructor(props) {
    super(props);

  }
  
  render() {
    const { recipes } = this.props;
    const cards = recipes.map((recipe) =>
      <RecipeCard
        name={recipe.name}
        directions={recipe.directions}
        description={recipe.description}
        key={recipe._id}
        id={recipe._id}
      />
    );
    console.log("🚀 ~ file: Recipes.jsx:18 ~ Recipes ~ cards ~ cards", cards)

    //take the props, and creat a card for each recipe , render ir 
    // console.log("🚀 ~ file: Recipes.jsx:27 ~ Recipes ~ render ~     this.props.recipes ",     this.props.recipes)

    return (
      <div>
        {cards}
      </div>
    );
  }

}

export default Recipes;