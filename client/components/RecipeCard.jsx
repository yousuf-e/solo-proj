//this will act as the individual recipe card recreated for each recipe
import React, { Component } from 'react';
import '../stylesheets/styles.scss';


class RecipeCard extends Component{
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    const { id } = this.props;
    console.log('handleDelete invoked on', id);
    fetch(`/api/recipes/${id}`, {
        method: 'DELETE'
      })
      .then((data) => console.log(data)) //how can i modify this to unmount the component as well?
      .catch(err => console.log(err));
  }

  render() {
    const { name, description, directions, id } = this.props
    return (
      <article className='recipeCard' >
        <header>
          <h2>{name}</h2>
          <button onClick={this.handleDelete}>X</button>
        </header>
        <img src='https://picsum.photos/200'/>
        <div contentEditable="true">{description}</div>
        <div contentEditable="true">{directions}</div>
      </article>
    );
  }
}

export default RecipeCard;