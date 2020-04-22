const router = require("express").Router();

// will be used to return the results of the async functions
let result;

const { confirmPurchase, orderHistory } = require("../functions/purchase-functions");

// the endpoint for completing a purchase and modifying item stock
router.post("/purchase", async (req, res) => {
    result = await confirmPurchase(req);
    res.send(result)
});

// the endpoint for returning the information of a past order based on a confirmation number
router.get("/history/:confirmation", async (req, res) => {
    result = await orderHistory(req);
    res.send(result)
});

module.exports = router;
