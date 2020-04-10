const router = require("express").Router();

const { getFeaturedItems, 
        sortCategory,
        getCompanyProducts,} = require("./functions");

//the endpoint for the home page of the app
router.get("/homePage", (req, res) => res.send(getFeaturedItems()));

//the endpoint for sorting by category
router.get("/products/:category", (req, res) => res.send(sortCategory(req)));

//the endpoint for sorting by company name
router.get("/products/sort/:companyName", (req, res) => res.send(getCompanyProducts(req)));

module.exports = router;
