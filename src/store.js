/**
 * @description
 * @Version Created by Stephen on 2019/12/20.
 * @Author Stephen
 * @license dongfangdianzi
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers/detailScreen';

const configureStore = preloadedState => {
    return createStore (
        rootReducer,
        preloadedState,
        compose (
            applyMiddleware(createLogger)
        )
    );
};

const store = configureStore();

export default store;