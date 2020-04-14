const router = require("express").Router();

const {getCompanyProducts, getCompanyName} = require('../functions/company-functions');

// the endpoint for sorting by company Id
router.get("/products/sort/:companyId", (req, res) => res.send(getCompanyProducts(req)));

// the endpoint for returning the company's name based on it's ID
router.get("/companyName/:companyId", (req, res) => res.send(getCompanyName(req)))

module.exports = router;