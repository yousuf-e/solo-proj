const express = require('express');
const app = express();
const path = require('path');
const apiController = require('./apiController');
const bodyParser = require('body-parser');
const multer = require('multer');

const upload = multer();



app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); //
app.use(upload.array()); //not sure what this line does 



//routing for express to get recipe data -> will need to set up as router file in the future
app.get('/api/recipes',
  apiController.getRecipeData,
  (req, res) => {
    res.status(200).json({ recipes: res.locals.recipes });
});

app.post('/api/recipes',
  apiController.addRecipeData,
  (req, res) => {
    console.log(req.body);
    res.status(201).redirect('/');
  }
);

app.delete('/api/recipes/:id',
  apiController.deleteRecipeData,
  (req, res) => {
    console.log(req.body);
    res.status(301).redirect('/')
  }
)

if (process.env.NODE_ENV === 'production') {
// statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
    // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });  

}

//set up catch all,
app.use('/', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../notFound.html'));
})


//set up global err handlers

const defaultErr = {
  log: 'Express error handler caught unknown middleware error',
  status: 400,
  message: {
    err: 'an error occured'
  }
}
app.use((err, req, res, next) => {
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  console.log(errorObj.status);
  res.status(errorObj.status).json(errorObj.message);
});


app.listen(3000); //listens on port 300