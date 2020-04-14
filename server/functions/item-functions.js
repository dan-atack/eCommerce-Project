const items = require("../data/items.json");

// ****************************************************************** // //
// function that will sort the data by category specified by the user //  //
// ****************************************************************** // //
const sortCategory = (req) => {  

    //category of items specified in the url
    const { category } = req.params;

    // filters the items by category into a new array
    let filteredItems = items.filter((item) => {
        if (item.category === category) {
            return item;
        }
    });

    return filteredItems;
};


// ****************************************************************** //
// function that returns products related to the user's search query  //
// ****************************************************************** //
const getSearchResults = (req) => {  

    const { userInput } = req.params;

    // filters the items based on the user's input
    let getSearchResults = items.filter((item) => {
        if (item.name.toLowerCase().includes(userInput.toLowerCase())) {
            return item;
        }
    });

    // if the user has searched for a specific category, returns all items in the related category, priority goes to the names above
    items.filter((item) => {
        if (item.category.toLowerCase().includes(userInput.toLowerCase())) {
            getSearchResults.push(item);
        }
    });

    return getSearchResults;
};


// ********************************************** //
// returns the information of the specified item  //
// ********************************************** //
const getItemInformation = (req) => {  

    const {itemId} = req.params;

    // wiwll be used to determine the position of the required item
    let position;

    items.forEach((item, index) => {
        if (item.id == itemId){
            position = index;
        }
    })

    return(items[position]);
}


// *********************************** //
// returns the categories in an array  //
// *********************************** //
const getCategories = () => {  

    let types = [];

    const makeTypes = () => {
        items.forEach((item) => {
            types.push(item.category);
        });
    };

    makeTypes();

    unique = (value, index, self) => {
        return self.indexOf(value) === index;
    };

    return(types.filter(unique));
}


// ******************************************************************************************************* //
// returns an array of the 3 items on special sorted by highest stock and 3 random items as featured items //
// ******************************************************************************************************* //
const getFeaturedItems = () => {  

    // constant of how many items we want displayed
    const NUM_OF_ITEMS = 3;

    // will be determined based on the highest number in stock
    let biggestNum = 0;

    // the 3 arrays that are used to select the items displayed on the homepage
    let itemsOnSale = [];
    let highestStock = [];
    let featuredItems = [];

    // finds the highest number of items in stock
    items.forEach((item) => {
        if (item.numInStock > biggestNum) biggestNum = item.numInStock;
    });

    // fills up the highestStock array with the items containing the highest stock, and does so until we have at least 4 items
    // (for randomzied variety)
    do {

        highestStock = items.filter((item) => {
            if (item.numInStock === biggestNum) {
                return item;
            }
        });

        --biggestNum;

    } while (highestStock.length <= NUM_OF_ITEMS);

    // sets random items in the featuredItems array and itemsOnSale array
    for (let i = 0; i < NUM_OF_ITEMS; ++i) {
        featuredItems.push(items[Math.floor(Math.random() * items.length)]);
        itemsOnSale.push(highestStock[Math.floor(Math.random() * highestStock.length)]);
    }

    return { sale: itemsOnSale, feature: featuredItems };
};

module.exports = {
    getFeaturedItems,
    sortCategory,
    getCategories,
    getItemInformation,
    getSearchResults,
};