const { query } = require('express');
const { resourceLimits } = require('worker_threads');
const db = require('./models.js');

const apiController = {};

apiController.getRecipeData = (req, res, next) => {
  console.log('apiController.getRecipeData invoked');
  db.query('SELECT * FROM recipes')
    .then((data) => {
      res.locals.recipes = data.rows;
    })
    .then(() => next())
    .catch(err => next({}));
};

apiController.addRecipeData = (req, res, next) => {
  console.log('apiController.addRecipeData invoked');
  const { name, description, directions } = req.body;
  const values = [name, description, directions];
  const query = 'INSERT INTO recipes (name, description, directions) VALUES ($1,$2,$3) RETURNING *'
  db.query(query, values)
    .then((data) => {
      console.log(data.rows);
    })
    .then(next())
    .catch(error => {
      next({
        log:`error caught at apiController.addRecipeData ${error}`
      })
    });
}


//will receive a param of id, and will delete that id from the database
apiController.deleteRecipeData = (req, res, next) => {
  console.log('apiController.deleteRecipeData invoked');
  const { id } = req.params;
  const query = `DELETE FROM recipes WHERE _id=${id} RETURNING *`;
  db.query(query)
    .then((data) => {
    console.log(data.rows);
    })
    .then(next())
    .catch(error => {
      next({
        log:`error caught at apiController.deleteRecipeData ${error}`
      })
    })
};
  

module.exports = apiController;