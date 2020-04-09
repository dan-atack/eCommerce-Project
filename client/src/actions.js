// export const addItem = item => ({
//     // Type tells the dispatcher what to do:
//     type: 'ADD_ITEM',
//     // item (in this case - whatever your argument above is goes here) tells the dispatcher what to use when it does its thing:
//     item,
// });

export const testState = item => ({
    // type tells the dispatcher what to do:
    type: 'ADD_TEST_ITEM_TO_CART_STATE',
    item,
});

export const getFeatItems = items => ({
    type: 'GET_FEATURED_ITEMS',
    items,
})

// MORE ACTIONS GO HERE :)