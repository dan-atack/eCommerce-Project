// After some deliberation, I think it would be best for the items list to be an object; that way you can query it by name/id etc...
const initialState = {};

export default function cartItemsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM_TO_CART": {
      let qty = 0;
      // clicking add to cart repeatedly increases qty:
      qty = state[action.item.id]
        ? (qty = state[action.item.id].quantity + 1)
        : (qty = 1);
      // make sure clicking add to cart cannot exceed product availability:
      if (state[action.item.id] && qty >= state[action.item.id].numInStock)
        qty = state[action.item.id].numInStock;
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: qty,
        },
      };
    }
    case "SET_QUANTITY": {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          quantity: action.amt,
        },
      };
    }
    case "REMOVE_ITEM": {
      // We cannot alter the state directly; instead we must always return a new state, based on a copy we make of the original:
      let stateCopy = { ...state };
      delete stateCopy[action.id];
      return stateCopy;
    }
    case "CLEAR_CART": {
      return {};
    }
    default: {
      return state;
    }
  }
}
