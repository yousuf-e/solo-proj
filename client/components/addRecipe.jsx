import React, { Component, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      directions:'',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleRichTextChange = this.handleRichTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) { //modify handle change to set the appropriate state
    const { name, value } = event.target;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
    console.log(event.target.value);
  }

  handleRichTextChange(html) { //modify handle change to set the appropriate state
    this.setState({ directions: html });
    console.log(html);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    const { name, description, directions } = this.state;
    fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, description, directions })
     })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
      console.error('Error',err);
    })
  }

  //add a handle submit to submit the data 

  //function here that will take the cvalue once the form is submitted and send a http request 

  render() {
    return( // chane the action to onSubmit, add a handler?
     <div> Create a new recipe!
       <hr></hr>
      <form onSubmit={this.handleSubmit}> 
      <p>
        <label htmlFor="name">
          <span>Name: </span>
        </label>
            <input
              type="text"
              name="name"
              value={this.state.name || ''}
              onChange={this.handleChange}
            />
      </p>
      <p>
        <label htmlFor="description">
          <span>Description: </span>
        </label>
            <input
              type="text"
              name="description"
              value={this.state.description || ''}
              onChange={this.handleChange}
            />
      </p>
      <p>
        <label htmlFor="directions">
          <span>Directions: </span>
        </label>
            <ReactQuill
              name="directions"
              theme="snow"
              placeholder={'What should we make today...'}
              value={this.state.directions || ''}
              onChange={this.handleRichTextChange}
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