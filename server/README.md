# Backend

You should document your endpoints in this file.

The "/homePage" endpoint is the home page endpoint. It will return an array of 3 items on sale after filtering through the data for the 3 items with the highest stock. It will also randomly select 3 items to display as featured items on the homepage.

the "/products/:category" endpoint will serve to sort through the list of items and return those who are specific to the user's selection. 

the "/products/sort/:companyName" endpoint will sort through all the products based on a specified company name. It will go through the "companies.json" data file, match the company name to the user's choice and then pull the company's ID and use that to filter through the "items.json" data file for the specific items sold by that company.

the "/products/search/:userInput" endpoint will sort through the products based on the user's search query in the search bar. It will return all items related to the query.

the "/purchase" endpoint will receive an object from the front end based on the contents of the user's cart once they have confirmed the purchase and will modify existing stock based on this information.



Categories : 
// 'Fitness',
// 'Medical',
// 'Lifestyle',
// 'Entertainment',
// 'Industrial',
// 'Pets and Animals',
// 'Gaming'