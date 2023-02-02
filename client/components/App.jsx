import React, { Component } from 'react';
import Recipes from './Recipes.jsx';
import '../stylesheets/styles.scss';
import AddRecipe from './AddRecipe.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [], // 
      //will contain all the recipe info in an obj w the id as the key
      //will know if it fetched the recipes to it only does it when it needs to 
    }
    //fucntions will be 
    //to add the recipes(grab them from the reponse and add them to the state)
    this.addRecipes = this.addRecipes.bind(this); 
    this.handleDelete = this.handleDelete.bind(this);
  }
  //will have to fetch the data from the api once the app mounts 
  handleDelete(event) {
    const { recipes } = this.state;
    const { id } = event.target;
    console.log('handleDelete invoked on', id);
    fetch(`/api/recipes/${id}`, {
        method: 'DELETE'
      })
      .then((data) => console.log('data returned from del',data)) //how can i modify this to unmount the component as well?
      .then((data) => {
        console.log(recipes);
        const index = recipes.findIndex((recipe) => recipe._id == id);
        recipes.splice(index, 1);
        this.setState({ recipes })
      })
      .catch(err => console.log(err));

  }

  componentDidMount() {
    fetch('/api/recipes')
      .then(res => res.json())
      .then(res => this.addRecipes(res))
      .catch(err => console.log('App.componentDidMount: get recipes: ERROR: ', err));
  }

  addRecipes(resRec) {
    const { recipes } = resRec;
    this.setState({ recipes });
    return true; 
  }

  //function def for adding the recipes -> will take the obj of the recipes from the input
    //wll create a deep copy of the curent recipes obj in state and the current recipe ids
    //updates the rcurrent recipes obj and the ids arr with eones retrieved
    //set the state with the deep copies that we just modded
    //return true so as to not trigger catch
  
  
  render() {
    return (
      //take the state, pass it into recipes as props
      <div className='recipeContainer'>
        <AddRecipe />
        <Recipes
          recipes={this.state.recipes}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}

export default App;
