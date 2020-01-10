
import { combineReducers } from 'redux';
import update from 'immutability-helper';
import * as actionTypes from '../constants/actionTypes/policeDetails';

// 原始默认state
const initState = {
    btnVisible: false,
    data: {
        num: '3475411215454212344344',
        sort: '群众求助',
        type: '日常生活求助',
        fineClass: '日常生活求助',
        person: '过路人',
        phone: '15788787451',
        time: '2018-07-14 10:00:00',
        placeType: '城区道路',
        detail: '事件详情，事件详情，事件详情，事件详情事件详情事件详情，事件详情事件详情事件详情',
        longitude: '119.26556222',
        latitude: '37.1554541',
        address: '山东省莱州市电业局对面新号动力',
        unit: '莱州市公安局',
        result: '其他处理结果',
        status: '未立案',
        warning: '2018-1121-221'


    }
};

export default function policeDetails(state = initState, action) {
    const {btnVisible} = state;
    // console.log('initState',initState);
    switch (action.type) {
        case actionTypes.SET_VISIBLE_BUTTON:
            return update(state, {
                btnVisible: { $set: !btnVisible }
            });
        default:
            return state;
    }
};

//  combineReducers({
//     setVisibleButtonReducer
// });
