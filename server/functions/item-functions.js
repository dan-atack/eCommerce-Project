const {MongoClient} = require("mongodb");

const {getItems} = require("../data/items");

// grabbing all the items from the data base without having to ping it every time
// will allow us to return the relevant information until a change has been made
let items;

const getData = async () => {
    items = await getItems();
}
getData();

// customized sort function (code found at https://www.sitepoint.com/sort-an-array-of-objects-in-javascript)
const sortByStock = (a, b) => {
    const stockA = a.numInStock;
    const stockB = b.numInStock;

    let comparison = 0;

    if (stockB > stockA) {
        comparison = 1;
    }
    else {
        comparison = -1;
    }

    return comparison
}

// ****************************************************************** //
// function that will sort the data by category specified by the user //
// ****************************************************************** //
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
        if (item._id == itemId){
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
const getHomepage = () => {  
    getData();

    // constant of how many items we want displayed
    const NUM_OF_ITEMS = 3;

    // the arrays that are used to select the items displayed on the homepage
    let itemsOnSale = [];
    let featuredItems = [];
    let sortedItems = [...items];
    
    sortedItems.sort(sortByStock);

    // sets random items in the featuredItems array | sets the 3 first items with the highest stock in the itemsOnSale array
    for (let i = 0; i < NUM_OF_ITEMS; ++i) {
        featuredItems.push(sortedItems[Math.floor(Math.random() * sortedItems.length)]);
        itemsOnSale.push(sortedItems[i]);
    }

    return { sale: itemsOnSale, feature: featuredItems };
};

module.exports = {
    getHomepage,
    sortCategory,
    getCategories,
    getItemInformation,
    getSearchResults,
};