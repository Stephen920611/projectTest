
import { combineReducers } from 'redux';
import update from 'immutability-helper';
import * as actionTypes from '../constants/actionTypes/policeClue';

// 原始默认state
const initState = {
    index: 0,
    setIndex: 0,
    total: 222,
    data: {
        video: 122,
        photo: 122,
        file: 122,
        camera: 22
    },
    dataList: [
        {
            name: '管理员',
            dec: '1描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            time: '2019-04-30 07:28:00'
        }, {
            name: '管理员',
            dec: '2描述信息描述信息描述信息',
            time: '2019-04-30 07:28:00'
        }, {
            name: '管理员',
            dec: '1描述信息描述信息描述信息',
            time: '2019-04-30 07:28:00'
        }, {
            name: '管理员',
            dec: '3描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            time: '2019-04-30 07:28:00'
        }, {
            name: '管理员',
            dec: '4描述信息描述信息描述信息',
            time: '2019-04-30 07:28:00'
        }, {
            name: '管理员',
            dec: '5描述信息描述信息描述信息',
            time: '2019-04-30 07:28:00'
        },
    ]
};

export default function policeClue(state = initState, action) {
    // console.log('initState',initState);
    switch (action.type) {
        case actionTypes.SET_DATA_TOTAL:
            /*return update(state, {
                btnVisible: { $set: !btnVisible }
            });*/
            return state;
        default:
            return state;
    }
};

//  combineReducers({
//     setVisibleButtonReducer
// });
