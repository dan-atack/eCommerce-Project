const items = require("./data/items.json");

//returns an array of the 3 featured items, sorted by highest stock
const getFeaturedItems = () => {
    let featuredItems = [];
    let biggestNum = 0;
    let itemToDisplay;

    //function to flush the values of the variables to avoid repeating code
    const cleanup = () => {
        featuredItems.push(itemToDisplay);
        itemToDisplay = "";
        biggestNum = 0;
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
        if (item.numInStock > biggestNum && item.numInStock != featuredItems[0].numInStock) {
            biggestNum = item.numInStock;
            itemToDisplay = item;
        }
    })

    cleanup();

    //third place, third highest stock
    items.forEach(item => {
        if (item.numInStock > biggestNum && item.numInStock != featuredItems[0].numInStock && item.numInStock != featuredItems[1].numInStock) {
            biggestNum = item.numInStock;
            itemToDisplay = item;
        }
    })

    cleanup();
    // console.log(featuredItems);
    return(featuredItems);
}

module.exports = {
    getFeaturedItems,
}