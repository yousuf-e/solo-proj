import React, { Component } from 'react';
import Recipes from './Recipes.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h3>Exape the matrics</h3>
          <Recipes />
      </div>
    )
  }
}

export default App;
