const express = require('express');
const app = express();
const path = require('path');
const apiController = require('./apiController');


//routing for express to get recipe data -> will need to set up as router file in the future
app.get('/api/recipes',
  apiController.getRecipeData,
  (req, res) => {
    res.status(200).send(res.locals.recipes);
  });



if (process.env.NODE_ENV === 'production') {
// statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
    // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });  
}



app.listen(3000); //listens on port 300