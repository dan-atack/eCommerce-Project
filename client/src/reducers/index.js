import { combineReducers } from 'redux';

import catalog from './catalogReducer';
import cartItems from './cartItemsReducer';
import filters from './filterReducer';
import designSetting from './designReducer';

export default combineReducers({ catalog, cartItems, filters, designSetting });

// This returns two lists of items: the featured and sale products, on initial load:
export const parseInitialItems = (state) => {
  if (state.catalog.status === 'complete') {
    return {
      saleItems: Object.values(state.catalog.saleItems),
      featuredItems: Object.values(state.catalog.featuredItems),
    };
  }
};
export const displaySaleIds = (state) => {
  if (state.catalog.status === 'complete') {
    let saleIds = [];
    Object.values(state.catalog.saleItems).forEach((item) =>
      saleIds.push(item._id)
    );
    return saleIds;
  }
};
// Show me the loading states:
// loading state for initial server fetch:
export const displayLoadState = (state) => state.catalog.status;

export const displayDetailLoadState = (state) => state.catalog.detailStatus;

// Get specific product info for Product Details page:
export const getProductDetails = (state) => state.catalog.productDetails;
