const router = require("express").Router();

const { getFeaturedItems, 
        sortCategory,
        getCompanyProducts,
        getSearchResults,
        confirmPurchase,
        orderHistory,
        getCategories,
        getItemInformation,
        getCompanyName,} = require("./functions");

// the endpoint for the home page of the app
router.get("/homePage", (req, res) => res.send(getFeaturedItems()));

// the endpoint for sorting by category
router.get("/products/:category", (req, res) => res.send(sortCategory(req)));

// the endpoint for sorting by company name
router.get("/products/sort/:companyId", (req, res) => res.send(getCompanyProducts(req)));

// the endpoint for returning the company's name based on it's ID
router.get("/companyName/:companyId", (req, res) => res.send(getCompanyName(req)))

// the endpoint for sorting by user's search query
router.get("/products/search/:userInput", (req, res) => res.send(getSearchResults(req)));

// the endpoint for completing a purchase and modifying item stock
router.post("/purchase", (req, res) => res.json(confirmPurchase(req)));

// the endpoint for returning the information of a past order based on a confirmation number
router.get("/history/:confirmation", (req, res) => res.send(orderHistory(req)));

// the endpoint who's only purpose is to return an array of all the available categories
router.get("/list/categories", (req, res) => res.send(getCategories()));

// the endpoint for returning a specific item's information
router.get("/item/:itemId", (req, res) => res.send(getItemInformation(req)));

module.exports = router;
