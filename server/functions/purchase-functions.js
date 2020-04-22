const {MongoClient} = require("mongodb");

const {getItems} = require("../data/items");

let items;

const getData = async () => {
    items = await getItems();
}
getData();

// ************************************************************************** //
// function that stores a confirmation order and the order details in memory  //
// and sends back the confirmation number with a status 200                   //
// ************************************************************************** //
const confirmPurchase = async (req) => {
    const { order } = req.body;
    const { cartItems } = order;

    //removing the sensitive payment info, replacing with basic confirmation
    const safeOrder = {
    ...order, 
    payment: 'Payment Confirmed',
    }

    const client = new MongoClient("mongodb://localhost:27017", {
        useUnifiedTopology: true,
    });

    await client.connect();

    const db = client.db("e_commerce");

    // changes the number in stock of the item(s) purchased
    cartItems.forEach((cartItem) => {
    items.forEach((item) => {
            if (cartItem._id === item._id) {
                const newStock = item.numInStock - cartItem.quantity;
                db.collection("items").updateOne({_id: item._id}, {$set: {numInStock: newStock}})
            }
        });
    });

    // creating a confirmation number which will be sent back to the user and stored in the server memory
    const random = Math.floor(Math.random() * 1000000);

    const completedOrder = {_id: random.toString(), order: safeOrder}

    // stores the order history in the DB
    await db.collection("order_history").insertOne(completedOrder);

    client.close();

    return { confirmation: random, status: 200 };
};


// ******************************************************************************************************* //
// function that will sort through the history of purchases and return the details of a specified purchase //
// ******************************************************************************************************* //
const orderHistory = async (req) => {

    const {confirmation} = req.params;

    const client = new MongoClient("mongodb://localhost:27017", {
        useUnifiedTopology: true,
    });

    await client.connect();

    const db = client.db("e_commerce");
    
    // grabs the order history based on confirmation number
    const r = await db.collection("order_history").findOne({_id: confirmation});

    return (r);
}

module.exports = {confirmPurchase, orderHistory};