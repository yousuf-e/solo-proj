//this will act as the individual recipe card recreated for each recipe
import React, { Component } from 'react';

class RecipeCard extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const { name, description, directions, _id } = this.props
    return (
      <article>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{directions}</div>
      </article>
    );
  }
}

export default RecipeCard;