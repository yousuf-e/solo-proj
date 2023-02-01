//this will act as the individual recipe card recreated for each recipe
import React, { Component } from 'react';

class RecipeCard extends Component{
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <article>
        <h3>Recipe Name</h3>
        <div>Recipe Descrip</div>
      </article>
    );
  }
}

export default RecipeCard;