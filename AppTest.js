import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { View } from 'react-native';

//路由
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {TabNav} from "./src/index";
import A from './src/pages/DetailScreen/DetailScreen';
import PoliceInquiry from './src/pages/PoliceIntelligence/PoliceInquiry';
import PoliceMessage from './src/pages/PoliceIntelligence/PoliceMessage';
import PoliceDetails from './src/pages/PoliceIntelligence/PoliceDetails';
import PoliceClue from './src/pages/PoliceIntelligence/PoliceClue';
import PeopleInvolved from './src/pages/PoliceIntelligence/PeopleInvolved';
import PoliceMap from './src/pages/PoliceIntelligence/PoliceMap';
import PoliceIntelligence from './src/pages/PoliceIntelligence/PoliceIntelligence';

// import LoginPage from "./page/Login/loginPage";
// import {FindAccountPage} from "./page/Login/findAccountPage"; // 路由导航
import HomeScreen from './src/pages/HomeScreen/HomeScreen';


const App = createStackNavigator({
        // Login: {screen: LoginPage}, // 登录页
        // Reg: {screen: RegPage}, // 注册页
        // FindAccount: {screen: FindAccountPage}, // 找回密码页
        /*Main: {
            screen: TabNav,
            /!*navigationOptions: ({navigation}) => ({
                header: null  // 顶部标题
            })*!/
            navigationOptions: ({navigation}) => {
                const titleMap = {
                    Home: '警情库',
                    Details: '我的'
                };
                // 根据路由的顺序以及路由名定义title
                const result = {
                    title: titleMap[navigation.state.routes[navigation.state.index].routeName],
                    headerBackTitle: null
                };
                if(navigation.state.routes[navigation.state.index].routeName === 'Mine'){
                    return {header: null}
                }
                return result;
            }
        },*/
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                title: '首页',
            }
        },
        PoliceIntelligence: {//警情库
            screen: PoliceIntelligence,
            navigationOptions: () => ({
                headerBackTitle: '返回',
                title:'警情库',
                headerStyle:{
                    backgroundColor:'#fff'
                }
            }),
        },
        PoliceInquiry: {//警情事件查询
            screen: PoliceInquiry,
            navigationOptions: () => ({
                headerBackTitle: '返回',
                title:'警情事件查询',
                headerStyle:{
                    backgroundColor:'#fff'
                }
            }),
        },
        PoliceMessage: {//警情库
            screen: PoliceMessage,
            navigationOptions: () => ({
                headerBackTitle: '返回',
                title:'警情库',
                headerStyle:{
                    backgroundColor:'#fff'
                }
            }),
        },
        PoliceDetails: {//警情详情
            screen: PoliceDetails,
            navigationOptions: () => ({
                headerBackTitle: '返回',
                title:'警情详情',
                headerStyle:{
                    backgroundColor:'#fff'
                }
            }),
        },
        PoliceClue: {//警情线索
            screen: PoliceClue,
           /* navigationOptions: () => ({
                headerBackTitle: '返回',
                title:'警情线索',
                headerStyle:{
                    backgroundColor:'#fff'
                }
            }),*/
        },
        PeopleInvolved:{//涉案人员
            screen: PeopleInvolved,
        },
        PoliceMap: {//地图信息
            screen: PoliceMap,
            navigationOptions: () => ({
                headerBackTitle: '返回',
                title:'地图信息',
                headerStyle:{
                    backgroundColor:'#fff'
                }
            }),
        },
    },
    {
        initialRouteName: 'HomeScreen',
        headerMode: 'screen'
    });

const AppContainer = createAppContainer(App);

export default class AppTest extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}
