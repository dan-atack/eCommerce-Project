const items = require("./data/items.json");

//returns an array of the 3 items on special sorted by highest stock and 3 random items as featured items
const getFeaturedItems = () => {
    //used to determine the 3 items on special
    let itemsOnSale = [];
    let biggestNum = 0;
    let itemToDisplay;

    //function to flush the values of the variables
    const cleanup = () => {
        itemsOnSale.push(itemToDisplay);
        itemToDisplay = "";
        biggestNum = 0;
    }
    
    //used to determine the 3 items to be featured
    let featuredItems = [];

    //sets 3 random items in the featuredItems array
    for (let i = 0; i < 3; ++i) {
        featuredItems.push(items[Math.floor(Math.random() * (items.length))]);
    }

    //first place, highest stock
    items.forEach(item => {
        if (item.numInStock > biggestNum) {
            biggestNum = item.numInStock;
            itemToDisplay = item;
        }
    })

    cleanup();
    
    //second place, second highest stock
    items.forEach(item => {
        if (item.numInStock > biggestNum && item.numInStock != itemsOnSale[0].numInStock) {
            biggestNum = item.numInStock;
            itemToDisplay = item;
        }
    })

    cleanup();

    //third place, third highest stock
    items.forEach(item => {
        if (item.numInStock > biggestNum && item.numInStock != itemsOnSale[0].numInStock && item.numInStock != itemsOnSale[1].numInStock) {
            biggestNum = item.numInStock;
            itemToDisplay = item;
        }
    })

    cleanup();

    //returns an object containing 2 arrays, containing 3 objects of the appropriate items
    return({sale: itemsOnSale, feature: featuredItems});
}

//function that will sort the data by category specified by the user
const sortCategory = (req) => {
// List of categories (for testing purposes)
// 'Fitness',
// 'Medical',
// 'Lifestyle',
// 'Entertainment',
// 'Industrial',
// 'Pets and Animals',
// 'Gaming'

    //category of items specified in the url
    const {category} = req.params;

    //array of items filtered by category
    let filteredItems = [];
    
    //sets the items filtered by category in the array
    items.forEach(item => {
        if (item.category === category) filteredItems.push(item);
    })

    return (filteredItems);
}

module.exports = {
    getFeaturedItems,
    sortCategory
}