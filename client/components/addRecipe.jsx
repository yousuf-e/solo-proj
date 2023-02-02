import React, { Component } from 'react';

class AddRecipe extends Component {
  constructor(props) {
    super(props);
  }

  //function here that will take the cvalue once the form is submitted and send a http request 

  render() {
    return(
     <div> Create a new recipe!
       <hr></hr>
      <form action="/api/recipes" method="POST">
      <p>
        <label htmlFor="name">
          <span>Name: </span>
        </label>
        <input type="text" id="name" name="name" />
      </p>
      <p>
        <label htmlFor="description">
          <span>Description: </span>
        </label>
        <input type="text" id="name" name="description" />
      </p>
      <p>
        <label htmlFor="directions">
          <span>Directions: </span>
        </label>
        <input type="text" id="name" name="directions" />
      </p>
      <section>
      <p>
        <button type="submit">Let's Cook!</button>
      </p>
      </section>
     </form> 
    </div> 
    )
  }
}

export default AddRecipe;