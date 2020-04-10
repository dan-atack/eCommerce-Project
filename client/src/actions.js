// export const addItem = item => ({
//     // Type tells the dispatcher what to do:
//     type: 'ADD_ITEM',
//     // item (in this case - whatever your argument above is goes here) tells the dispatcher what to use when it does its thing:
//     item,
// });

export const addItemToCart = item => ({
    // type tells the dispatcher what to do:
    type: 'ADD_ITEM_TO_CART',
    item,
});

export const setQty = (id, amt) => ({
    type: 'SET_QUANTITY',
    id,
    amt,
});

export const getInitItems = items => ({
    type: 'GET_INITIAL_ITEMS',
    items,
})

// MORE ACTIONS GO HERE :)