const router = require('express').Router();

const { getFeaturedItems,
        sortCategory, } = require("./funtions");

//the endpoint for the home page of the app
router.get('/homePage', (req, res) => res.send(getFeaturedItems()));

//the endpoint for sorting by category
router.get("/products/:category", (req,res) => res.send(sortCategory(req)));

module.exports = router;
