const db = require('./models.js');

const apiController = {};

apiController.getRecipeData = (req, res, next) => {
  console.log('got data');
  db.query('SELECT * FROM recipes')
    .then((data) => {
      res.locals.recipes = data.rows;
    })
    .then(() => next())
    .catch(err => next({}));
};


module.exports = apiController;