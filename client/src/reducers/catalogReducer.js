const initialState = {
    featuredItems: {},
    saleItems: {},
    status: 'idle',
};

export default function catalogReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_INITIAL_ITEMS': {
            return {
                ...state,
                featuredItems: {
                    ...action.items.feature
                },
                saleItems: {
                    ...action.items.sale
                }
            }
        }
        default: {
            return state;
        }      
    };
};