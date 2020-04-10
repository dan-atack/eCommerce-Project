import { combineReducers } from "redux";

import catalog from "./catalogReducer";
import cartItems from "./cartItemsReducer";
import filters from "./filterReducer";

export default combineReducers({ catalog, cartItems, filters });

export const displayFeaturedItems = (state) => state.catalog.catalogItems;
