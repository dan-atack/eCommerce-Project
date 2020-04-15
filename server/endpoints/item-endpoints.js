const router = require('express').Router();

const {
  getHomepage,
  sortCategory,
  getCategories,
  getItemInformation,
  getSearchResults,
} = require('../functions/item-functions');

// the endpoint for the home page of the app
router.get('/homepage', (req, res) => res.send(getHomepage()));

// the endpoint for sorting by category
router.get('/products/:category', (req, res) => res.send(sortCategory(req)));

// the endpoint who's only purpose is to return an array of all the available categories
router.get('/list/categories', (req, res) => res.send(getCategories()));

// the endpoint for returning a specific item's information
router.get('/item/:itemId', (req, res) => res.send(getItemInformation(req)));

// the endpoint for sorting by user's search query
router.get('/products/search/:userInput', (req, res) =>
  res.send(getSearchResults(req))
);

module.exports = router;
