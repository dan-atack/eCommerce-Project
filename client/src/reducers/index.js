import { combineReducers } from 'redux';

import catalog from './catalogReducer';
import cartItems from './cartItemsReducer';
import filters from './filterReducer';
import { createSelectorHook } from 'react-redux';

export default combineReducers({ catalog, cartItems, filters });

// This returns two lists of items: the featured and sale products, on initial load:
export const parseInitialItems = (state) => {
  if (state.catalog.status === 'complete') {
    return {
      saleItems: Object.values(state.catalog.saleItems),
      featuredItems: Object.values(state.catalog.featuredItems),
    };
  }
};
// Show me the loading states:
// loading state for initial server fetch:
export const displayLoadState = (state) => state.catalog.status;

export const displayDetailLoadState = (state) => state.catalog.detailStatus;

// Get specific product info for Product Details page:
export const getProductDetails = (state) => state.catalog.productDetails;
