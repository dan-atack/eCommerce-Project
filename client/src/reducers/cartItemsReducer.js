// After some deliberation, I think it would be best for the items list to be an object; that way you can query it by name/id etc...
const initialState = {};

export default function cartItemsReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_ITEM_TO_CART': {
            let qty = 0;
            state[action.item.id] ? qty = (state[action.item.id].quantity + 1) : qty = 1;
            return {
                ...state, 
                [action.item.id]: {
                    ...action.item,
                    quantity: qty,
                }
            }
        }
        case 'SET_QUANTITY': {
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    quantity: action.amt,
                }
            }
        }
        default: {
            return state;
        }      
    };
};