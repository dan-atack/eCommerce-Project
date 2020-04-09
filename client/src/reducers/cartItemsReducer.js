const initialState = {
    items: [],
};

export default function cartItemsReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TEST_ITEM_TO_CART_STATE': {
            return {
                ...state,
                [action.item.id]: {
                    ...action.item,
                    quantity: 1,
                }
            }
        }
        default: {
            return state;
        }      
    };
};