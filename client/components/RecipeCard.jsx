//this will act as the individual recipe card recreated for each recipe
import React, { Component } from 'react';
import '../stylesheets/styles.scss';


class RecipeCard extends Component{
  constructor(props) {
    super(props);
  }



  render() {
    const { name, description, directions, id, handleDelete } = this.props;

    return (
      <article className='recipeCard' >
        <header>
          <h2>{name}</h2>
          <button id={id} onClick={handleDelete}>X</button>
        </header>
        <img src='https://picsum.photos/200'/>
        <div contentEditable="true">{description}</div>
        <div contentEditable="true" className="directions" dangerouslySetInnerHTML={{__html: directions}}></div>
      </article>
    );
  }
}

export default RecipeCard;