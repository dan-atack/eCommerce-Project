import { createStore } from 'redux';

import reducer from './reducers';

export default function configureStore(initialState) {
    const store = createStore(
        reducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION && __REDUX_DEVTOOLS_EXTENSION()
    );

    return store;
};