/**
 * @description
 * @Version Created by Stephen on 2019/12/20.
 * @Author Stephen
 * @license dongfangdianzi
 */

import { combineReducers } from 'redux';
import update from 'immutability-helper';
import * as actionTypes from '../constants/actionTypes/detailScreen';

// 原始默认state
const initState = {
    count: 5,
    factor: 1
};

// detailScreenReducer.reducer = 'detailScreenReducer';
export default function detailScreenReducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.TEST_DETAIL_SCREEN:
            return update(state, {
                count: { $set: 12321 }
            });
        default:
            return state;
    }
}

// export default combineReducers({
//     detailScreenReducer
// });