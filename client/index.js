// let test = document.createElement("div");
// test.innerText = 'lets cook B-)';
// document.getElementById('root').appendChild(test);


import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

render(
  <App />,
  document.getElementById('root')
);