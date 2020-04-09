const initialState = {
    catalogueItems: [],
    status: 'idle',
};

export default function catalogReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_FEATURED_ITEMS': {
            return {
                ...state,
                catalogueItems: {
                    ...action.items
                }
            }
        }
        default: {
            return state;
        }      
    };
};