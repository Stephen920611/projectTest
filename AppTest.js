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
// import LoginPage from "./page/Login/loginPage";
// import RegPage from "./page/Login/regPage";
// import {FindAccountPage} from "./page/Login/findAccountPage"; // 路由导航

const App = createStackNavigator({
        // Login: {screen: LoginPage}, // 登录页
        // Reg: {screen: RegPage}, // 注册页
        // FindAccount: {screen: FindAccountPage}, // 找回密码页
        Main: {
            screen: TabNav,
            /*navigationOptions: ({navigation}) => ({
                header: null  // 顶部标题
            })*/
            navigationOptions: ({navigation}) => {
                const titleMap = {
                    Home: '首页',
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
        },
    },
    {
        initialRouteName: 'Main',
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
