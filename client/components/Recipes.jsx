//this will act as the main container for holding all the recipe cards

import React, { Component } from 'react';
import RecipeCard from './RecipeCard.jsx';

class Recipes extends Component{
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <section>
        <h2>Recipes header</h2>
        <div>Recipes will be attached here
          <RecipeCard />
          <RecipeCard />

          <RecipeCard />

          <RecipeCard />


        </div>
      </section>
    );
  }
}

export default Recipes;