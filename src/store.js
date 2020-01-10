/**
 * @description
 * @Version Created by Stephen on 2019/12/20.
 * @Author Stephen
 * @license dongfangdianzi
 */

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers/detailScreen';
import policeDetails from './reducers/policeDetails';
import policeClue from './reducers/policeClue';

const pageReducers = combineReducers({
    policeDetails,
    rootReducer,
    policeClue
});


const configureStore = preloadedState => {
    return createStore (
        pageReducers,
        preloadedState,
        compose (
            applyMiddleware(createLogger)
        )
    );
};

const store = configureStore();

export default store;