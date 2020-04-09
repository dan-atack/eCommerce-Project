const router = require('express').Router();

const { getFeaturedItems, } = require("./funtions");

//the endpoint for the home page of the app
router.get('/homePage', (req, res) => res.send(getFeaturedItems()))

module.exports = router;
