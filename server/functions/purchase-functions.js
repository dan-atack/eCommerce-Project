const items = require("../data/items.json");

// an array that will store all the orders that have been completed
let completedOrders = [];

// ************************************************************************** //
// function that stores a confirmation order and the order details in memory  //
// and sends back the confirmation number with a status 200                   //
// ************************************************************************** //
const confirmPurchase = (req) => {

    const { order } = req.body;
    const { cartItems } = order;

    //removing the sensitive payment info, replacing with basic confirmation
    const safeOrder = {
    ...order, 
    payment: 'Payment Confirmed',
    }

    // changes the number in stock of the item(s) purchased
    cartItems.forEach((cartItem) => {
    items.forEach((item) => {
            if (cartItem.id === item.id) {
                item.numInStock = item.numInStock - cartItem.quantity;
            }
        });
    });

    // creating a confirmation number which will be sent back to the user and stored in the server memory
    const random = Math.floor(Math.random() * 1000000);

    completedOrders.push({ confirmation: random, order: safeOrder });

    return { confirmation: random, status: 200 };
};


// ******************************************************************************************************* //
// function that will sort through the history of purchases and return the details of a specified purchase //
// ******************************************************************************************************* //
const orderHistory = (req) => {

    const {confirmation} = req.params;

    // will be used to determine the position of the required object in the array
    let position;

    completedOrders.forEach((order, index) => {
        if (order.confirmation == confirmation){
            position = index;
        }
    })

    return (completedOrders[position]);
}

module.exports = {confirmPurchase, orderHistory};