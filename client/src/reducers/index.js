import { combineReducers } from 'redux';

import catalog from './catalogReducer';
import cartItems from './cartItemsReducer';

export default combineReducers({ catalog, cartItems });