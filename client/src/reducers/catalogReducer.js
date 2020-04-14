const initialState = {
  featuredItems: [],
  saleItems: [],
  productDetails: {},
  status: 'idle',
  detailStatus: 'idle',
};

export default function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_LOAD_STATUS': {
      return {
        ...state,
        status: `${action.status}`,
      };
    }
    // separate loading state for product details:
    case 'UPDATE_DETAIL_LOAD_STATUS': {
      return {
        ...state,
        detailStatus: `${action.status}`,
      };
    }
    case 'GET_INITIAL_ITEMS': {
      return {
        ...state,
        featuredItems: [...action.items.feature],
        saleItems: [...action.items.sale],
      };
    }
    case 'SET_PRODUCT_DETAILS_FROM_CARD': {
      // set productDetails state from an item's card:
      return {
        ...state,
        productDetails: action.item,
      };
    }
    case 'SET_PRODUCT_DETAILS_FROM_FETCH': {
      return {
        ...state,
        productDetails: action.item,
      };
    }
    default: {
      return state;
    }
  }
}
