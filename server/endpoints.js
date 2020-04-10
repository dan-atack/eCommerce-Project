const router = require("express").Router();

const { getFeaturedItems, 
        sortCategory,
        getCompanyProducts,
        getSearchResults,
        confirmPurchase,} = require("./functions");

//the endpoint for the home page of the app
router.get("/homePage", (req, res) => res.send(getFeaturedItems()));

//the endpoint for sorting by category
router.get("/products/:category", (req, res) => res.send(sortCategory(req)));

//the endpoint for sorting by company name
router.get("/products/sort/:companyName", (req, res) => res.send(getCompanyProducts(req)));

//the endpoint for sorting by user's search query
router.get("/products/search/:userInput", (req, res) => res.send(getSearchResults(req)));

//the endpoint for completing a purchase and modifying item stock
router.post("/purchase", (req, res) => res.json(confirmPurchase(req)));

module.exports = router;
