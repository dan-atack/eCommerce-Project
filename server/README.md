# Backend

-Endpoints have been split into 3 separate files-

------ITEM ENDPOINTS------

The "/homePage" endpoint is the home page endpoint. It will return an array of 3 items on sale after filtering through the data for the 3 items with the highest stock. It will also randomly select 3 items to display as featured items on the homepage.

the "/products/:category" endpoint will serve to sort through the list of items and return those who are specific to the user's selection. 

the "/products/search/:userInput" endpoint will sort through the products based on the user's search query in the search bar. It will return all items related to the query.

the "/list/categories" endpoint will simply return an array of all the categories once requested.

the "/item/:itemId" endpoint will return the information of the specified item.


------COMPANY ENDPOINTS------

the "/companyName/:companyId" returns a company's name based on its ID.

the "/products/sort/:companyId" endpoint will sort through all the products based on a specified company ID. It will go through the "items.json" data file for the specific items sold by that company.


------PURCHASE ENDPOINTS------

the "/purchase" endpoint will receive an object from the front end based on the contents of the user's cart once they have confirmed the purchase and will modify existing stock based on this information.

the "/history/:confirmation" endpoint will receive a confirmation number from the user and filter through an array of past orders to return a specific order with the details of what items were purchased, in what quantity and for how much.