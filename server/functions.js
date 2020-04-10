const items = require("./data/items.json");
const companies = require("./data/companies.json");

//function that returns the products filtered by company name
const getCompanyProducts = (req) => {
    const {companyName} = req.params;

    //will be set to the company's ID from the companies.json file
    let companyId;

    //uses the company's name to find the company's ID
    companies.forEach(company => {
        if(company.name === companyName) companyId = company.id;
    })

    //filters through the items to find those released by that specific company
    let filteredProducts = items.filter(item => {
        if(item.companyId === companyId) return item;
    })

    return(filteredProducts);
}

//returns an array of the 3 items on special sorted by highest stock 
//and 3 random items as featured items
const getFeaturedItems = () => {

    //the 3 arrays that are used to select the items displayed on the homepage
    let itemsOnSale = [];
    let highestStock = [];
    let featuredItems = [];

    //will be determined based on the highest number in stock
    let biggestNum = 0;

    //constant of how many items we want displayed
    const NUM_OF_ITEMS = 3;

    //finds the highest number of items in stock
    items.forEach(item => {if (item.numInStock > biggestNum) biggestNum = item.numInStock});

    //fills up the highestStock array with the items containing the highest stock, and does so until we have at least 4 items
    do {
        highestStock = items.filter(item => {if(item.numInStock === biggestNum) return item});
        --biggestNum;
    }
    while (highestStock.length <= NUM_OF_ITEMS);

    //sets 3 random items in the featuredItems array and itemsOnSale array
    for (let i = 0; i < NUM_OF_ITEMS; ++i) {
        featuredItems.push(items[Math.floor(Math.random() * (items.length))]);
        itemsOnSale.push(highestStock[Math.floor(Math.random() * (highestStock.length))]);
    };

    //returns an object containing 2 arrays, containing 3 objects of the appropriate items
    return({sale: itemsOnSale, feature: featuredItems});
}

//function that will sort the data by category specified by the user
const sortCategory = (req) => {

    //category of items specified in the url
    const {category} = req.params;

    //filters the items by category into a new array
    let filteredItems = items.filter(item => {
        if (item.category === category) return item;
    })    

    return (filteredItems);
}

module.exports = {
    getFeaturedItems,
    sortCategory,
    getCompanyProducts,
}