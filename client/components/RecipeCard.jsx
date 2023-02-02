//this will act as the individual recipe card recreated for each recipe
import React, { Component } from 'react';
import '../stylesheets/styles.scss';


class RecipeCard extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const { name, description, directions, _id } = this.props
    return (
      <article className='recipeCard' >
        <h2>{name}</h2>
        <img src='https://picsum.photos/200'/>
        <div>{description}</div>
        <div>{directions}</div>
      </article>
    );
  }
}

export default RecipeCard;