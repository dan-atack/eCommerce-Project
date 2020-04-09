import { combineReducers } from 'redux';

import catalog from './catalogReducer';
import cartItems from './cartItemsReducer';

export default combineReducers({ catalog, cartItems });

export const displayFeaturedItems = state => state.catalog.catalogItems;