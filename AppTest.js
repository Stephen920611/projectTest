import React, { Component } from 'react';
import { View } from 'react-native';

//路由
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {TabNav} from "./src/RootPage";
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

export default createAppContainer(App);

/*
export default class FlexDimensionsBasics extends Component {

    render() {
        return (
            // 试试去掉父View中的`flex: 1`。
            // 则父View不再具有尺寸，因此子组件也无法再撑开。
            // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
            <>
                {/!*<View style={{height: 300}}>
                    <FontAwesome
                        name="angle-left"
                        size={26}
                        style={{ color: 'black' }}
                    />
                    <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                    <View style={{flex: 3, backgroundColor: 'steelblue'}} />
                </View>*!/}
                <TabContainer />
            </>

        );
    }
}*/
