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
      // modify price for items on sale:
      let saleItems = action.items.sale;
      saleItems.forEach((item) => {
        // convert price to number, then reduce it by 15%
        item.discountPrice = Math.round(Number(item.price.slice(1)) * 85) / 100;
        item.isOnSale = true;
      });
      return {
        ...state,
        featuredItems: [...action.items.feature],
        saleItems: saleItems,
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
