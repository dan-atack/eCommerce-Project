const router = require("express").Router();

const { confirmPurchase, orderHistory } = require("../functions/purchase-functions");

// the endpoint for completing a purchase and modifying item stock
router.post("/purchase", (req, res) => res.json(confirmPurchase(req)));

// the endpoint for returning the information of a past order based on a confirmation number
router.get("/history/:confirmation", (req, res) => res.send(orderHistory(req)));

module.exports = router;
