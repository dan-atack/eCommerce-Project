const initialState = {
    featuredItems: [],
    saleItems: [],
    productDetails: {},
    status: 'idle',
};

export default function catalogReducer(state = initialState, action) {
    switch(action.type) {
        case 'UPDATE_LOAD_STATUS': {
            return {
                ...state,
                status: `${action.status}`
            }
        }
        case 'GET_INITIAL_ITEMS': {
            return {
                ...state,
                featuredItems: [
                    ...action.items.feature
                ],
                saleItems: [
                    ...action.items.sale
                ]
            }
        }
        case 'SET_PRODUCT_DETAILS': {
            // takes a product id and isolates the info for this product into the product details category:
            const itemInFeat = state.featuredItems.filter(item => item.id == action.productId);
            const itemInSale = state.saleItems.filter(item => item.id == action.productId);
            // since we're filtering a list down to one item, we will just return the first (and only) item from that process:
            const item = (itemInFeat.length > 0) ? itemInFeat[0] : itemInSale[0];
            return {
                ...state,
                productDetails: item
            }
        }
        default: {
            return state;
        }      
    };
};