
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {ShoppingList, Recipes} = require('./models');

const jsonParser = bodyParser.json();
const app = express();

// log the http layer
app.use(morgan('common'));

// we're going to add some items to ShoppingList
// so there's some data to look at
ShoppingList.create('beans', 2);
ShoppingList.create('tomatoes', 3);
ShoppingList.create('peppers', 4);

// when the root of this router is called with GET, return
// all current ShoppingList items
app.get('/shopping-list', (req, res) => {
  res.json(ShoppingList.get());
});

// My attempt at Recipes

// add some tems to recipes
Recipes.create('chocolate milk', ['cocoa', 'milk', 'sugar']);
Recipes.create('pesto', ['olive oil', 'garlic', 'basil', 'pine nuts']);
Recipes.create('mashed potatoes', ['potatoes', 'milk', 'butter']);

// call with GET
app.get('/recipes', (req, res) => {
  res.json(Recipes.get());
});


app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
