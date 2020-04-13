// ACTIONS LIST, CATEGORIZED BY ACTION TYPE (Cart actions, catalog actions, filter actions):

// CART ACTIONS:
  // Will add an item to the cart when its 'add to cart' button is clicked; augments qty on additional clicks:
export const addItemToCart = (item) => ({
  type: "ADD_ITEM_TO_CART",
  item,
});
  // Increase or decrease qty of an item in the cart (up to the max in stock):
export const setQty = (id, amt) => ({
  type: "SET_QUANTITY",
  id,
  amt,
});
  // Remove an item from the cart state:
export const removeItem = (id) => ({
  type: "REMOVE_ITEM",
  id,
});
  // Remove ALL items from the cart state (sets cart to empty object):
export const clearCart = () => ({
  type: "CLEAR_CART",
});
/// cart-status actions
export const startPurchase = () => ({
  type: "START-PURCHASE-PROCESS",
});
export const submitOrder = () => ({
  type: "SUBMIT-ORDER",
});
export const submitOrderError = () => ({
  type: "SUBMIT-ORDER-ERROR",
});
export const submitOrderSuccess = () => ({
  type: "SUBMIT-ORDER-SUCCESS",
});
export const clearPurchase = () => ({
  type: "CLEAR-PURCHASE",
});


////CATALOG ACTIONS
export const getInitItems = (items) => ({
  type: "GET_INITIAL_ITEMS",
  items,
});
// data loading status updater:
export const updateLoadStatus = (status) => ({
  type: "UPDATE_LOAD_STATUS",
  status,
})
// load one item's info into 'Product Details' category; used in tandem with a selector to render product info details page:
export const setProductDetails = (productId) => ({
  type: "SET_PRODUCT_DETAILS",
  productId,
})

// FILTER ACTIONS:

export const filterItems = (filters) => ({
  type: "FILTER_ITEMS",
  filters,
});


// MORE ACTIONS GO HERE :)
