import React, { Component, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      directions:'hi!',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) { //modify handle change to set the appropriate state
    this.setState({ directions: html });
    console.log(this.state);
  }

  //add a handle submit to submit the data 

  //function here that will take the cvalue once the form is submitted and send a http request 

  render() {
    return( // chane the action to onSubmit, add a handler?
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
            <ReactQuill
              name="directions"
              theme="snow"
              placeholder={'What shoudld we make today...'}
              value={this.state.directions}
              onChange={this.handleChange}
            />
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