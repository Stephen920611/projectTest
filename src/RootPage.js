import React, { Component } from 'react';
import { View } from 'react-native';

//路由
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DetailsScreen from './pages/DetailScreen/DetailScreen';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import MineScreen from './pages/MineScreen/MineScreen';

export const TabNav = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
        Mine: {
            /*screen: createStackNavigator(
                {
                    Mine: {
                        screen: MineScreen,
                        navigationOptions: {
                            headerTitle: 'Mine',
                            tabBarLabel: '统计3',
                            tabBarPosition: 'bottom',
                        }
                    }
                })*/
            screen: MineScreen,

        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    iconName = 'ios-home';
                    return <Ionicons name={iconName} size={25} color={tintColor} />;
                } else if (routeName === 'Details') {
                    iconName = 'md-add';
                    // return <FontAwesome name='home' size={25} color={tintColor} />;
                } else if(routeName === 'Mine'){
                    iconName = 'ios-person';
                }

                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            //当前选中的tab bar的文本颜色和图标颜色
            activeTintColor: '#387ee9',
            //当前未选中的tab bar的文本颜色和图标颜色
            inactiveTintColor: '#fff',
            //是否显示tab bar的图标，默认是false
            showIcon: true,
            //showLabel - 是否显示tab bar的文本，默认是true
            showLabel: true,
            //是否将文本转换为大小，默认是true
            upperCaseLabel: false,
            //material design中的波纹颜色(仅支持Android >= 5.0)
            pressColor: '#788493',
            //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
            pressOpacity: 0.8,
            //tab bar的样式
            style: {
                backgroundColor: '#b2b2b2',
                paddingBottom: 1,
                borderTopWidth: 0.2,
                paddingTop:1,
                borderTopColor: '#ccc',
            },
            //tab bar的文本样式
            labelStyle: {
                fontSize: 16,
                margin: 1
            },
            //tab 页指示符的样式 (tab页下面的一条线).
            indicatorStyle: {height: 0},
        },
        //tab bar的位置, 可选值： 'top' or 'bottom'
        tabBarPosition: 'bottom',
        //是否允许滑动切换tab页
        swipeEnabled: true,
        //是否在切换tab页时使用动画
        animationEnabled: false,
        //是否懒加载
        lazy: true,
        // initialRouteName: 'Home',
        //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
        backBehavior: 'none',
    }
    );
