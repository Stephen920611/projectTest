import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
// import { TabView, SceneMap } from 'react-native-tab-view';
import imgUrl from './imgs/image.jpg';

const {width, height} = Dimensions.get('window');
let ScreenWidth = Dimensions.get('window').width;

class PeopleInvolved extends React.Component {
    state = {
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
                uploader:'管理员 述信息描述信息描述信息描述信息描述信',
                name: '张三',
                sex:'男',
                status:'待审核',
                id:37178198704115147,
                tel:17855854877,
                address:'山东省烟台市家庭住址家庭住址家庭住址家庭住址家庭住址家庭住址1111',
                dec: '1描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
                time: '2019-04-30 07:28:00',

            }, {
                uploader: '管理员',
                name: '张三',
                sex:'男',
                status:'待审核',
                id:37178198704115147,
                tel:17855854877,
                address:'山东省烟台市家庭住址家庭住址家庭住址家庭住址家庭住址家庭住址',
                dec: '2描述信息描述信息描述信息',
                time: '2019-04-30 07:28:00'
            }, {
                uploader: '管理员',
                name: '张三',
                sex:'男',
                status:'待审核',
                id:37178198704115147,
                tel:17855854877,
                address:'山东省烟台市家庭住址家庭住址家庭住址家庭住址家庭住址家庭住址',
                dec: '1描述信息描述信息描述信息',
                time: '2019-04-30 07:28:00'
            }, {
                uploader: '管理员',
                name: '张三',
                sex:'男',
                status:'待审核',
                id:37178198704115147,
                tel:17855854877,
                address:'山东省烟台市家庭住址家庭住址家庭住址家庭住址家庭住址家庭住址',
                dec: '3描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
                time: '2019-04-30 07:28:00'
            }, {
                uploader: '管理员',
                name: '张三',
                sex:'男',
                status:'待审核',
                id:37178198704115147,
                tel:17855854877,
                address:'山东省烟台市家庭住址家庭住址家庭住址家庭住址家庭住址家庭住址111',
                dec: '4描述信息描述信息描述信息',
                time: '2019-04-30 07:28:00'
            }, {
                uploader: '管理员',
                name: '张三',
                sex:'男',
                status:'待审核',
                id:37178198704115147,
                tel:17855854877,
                address:'山东省烟台市家庭住址家庭住址家庭住址家庭住址家庭住址家庭住址',
                dec: '5描述信息描述信息描述信息',
                time: '2019-04-30 07:28:00'
            },
        ]
    };

    componentDidMount() {
        // console.log('Home',this.props);
    }

    //tab键的名字，app.js设置也可以
    //顶部标题
    /*static navigationOptions = {
        headerBackTitle: '返回',
        title: '涉案人员',
        headerStyle: {
            backgroundColor: '#fff'
        }
    };*/
    static navigationOptions = ({ navigation,state }) => {
        // console.log('navigation',state);
        // console.log('this.props',navigation.getParam('total'));
        return {
            headerBackTitle: '返回',
            title: '涉案人员(' + navigation.getParam('total') +')',
            headerStyle: {
                backgroundColor: '#fff'
            }
            // +2
            //   -0
        };
    };

    changeTab = () => {

    };
    renderVideo = () => {
        const {dataList} = this.state;
        return (
            dataList.map((item, index) => {
                return (
                    <View style={styles.tabContainer} key={index}>
                        <View style={styles.headerTitle}>
                            <View style={{fontSize:14,flexDirection: 'row',justifyContent: 'space-between',}}>
                                <Text style={{width:200}}>上传人员：{item.uploader}</Text>
                                <Text style={{paddingRight:100}}>{item.time}</Text>
                            </View>
                            <View style={styles.message}>
                                <TouchableWithoutFeedback
                                    style={[{backgroundColor: '#ccc'}]}
                                    onPress={() => {

                                    }}
                                >
                                    <View>
                                        <Text style={styles.messageText}>
                                            NEW
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <View style={styles.tabContainerTop}>
                            <Image source={imgUrl} style={styles.icon}/>
                            <View style={styles.rightContainer}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{marginRight:30,fontSize:16}}>{item.name}</Text>
                                    <Text style={{marginRight:50}}>{item.sex}</Text>
                                    <View style={styles.button}>
                                        <TouchableWithoutFeedback
                                            style={[{backgroundColor: '#ccc'}]}
                                            onPress={() => {

                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                待审核
                                            </Text>
                                        </TouchableWithoutFeedback>
                                    </View>
                                </View>
                                <Text style={styles.p}  >身份证：{item.id}</Text>
                                <Text style={styles.p}  >联系电话：{item.tel}</Text>
                                <View style={{flex:1,flexDirection: 'row'}}  >
                                    <Text style={styles.p}>家庭住址：</Text>
                                    <Text style={[styles.p,{flex:1}]}>{item.address}</Text>
                                </View>
                                <View style={{flex:1,flexDirection: 'row'}}  >
                                    <Text style={styles.p}>描述：</Text>
                                    <Text style={[styles.p,{flex:1}]} numberOfLines={3} ellipsizeMode='tail'>{item.dec}</Text>
                                </View>
                                {/*<Text style={styles.p} numberOfLines={3} ellipsizeMode='tail'>{item.dec}</Text>*/}
                            </View>
                        </View>

                    </View>

                )
            })
        )
    };


    render() {
        const {data} = this.state;
        return (
            <ScrollableTabView
                style={styles.container}
                renderTabBar={() => <DefaultTabBar/>}
                tabBarUnderlineStyle={styles.lineStyle}
                tabBarActiveTextColor='#1890ff'
                tabBarTextStyle={styles.tabView}
            >
                <ScrollView tabLabel={"视频(" + data.video + ")"} style={styles.scrollViewCon}>
                    {this.renderVideo()}
                </ScrollView>
                <ScrollView tabLabel={"图片(" + data.photo + ")"}>
                    <View style={styles.textStyle}>
                        <Text>图片</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel={"文件(" + data.file + ")"}>
                    <View style={styles.textStyle}>
                        <Text>文件</Text>
                    </View>
                </ScrollView>
            </ScrollableTabView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    lineStyle: {
        width: ScreenWidth / 3,
        height: 4,
        backgroundColor: '#1890ff',
    },
    textStyle: {
        flex: 1,
        // fontSize:20,
        marginTop: 20,
        textAlign: 'center',

    },
    tabView: {
        fontSize: 14,
        paddingTop: 10
    },

    scrollViewCon: {
        padding: 12,
    },
    tabContainer: {
        flex: 1,
        width: width - 24,
        // flexDirection: 'row',
        padding: 7,
        borderBottomWidth: 1,
        borderColor: '#797979',
        backgroundColor: 'white',
        borderWidth: 1,
        // height: 193,
        minHeight:193,
        marginBottom: 12
    },
    headerTitle:{
        borderBottomWidth: 1,
        borderColor: '#797979',
        paddingBottom:7,
        marginBottom:7,
    },
    tabContainerTop: {
        flex: 1,
        flexDirection: 'row',
    },
    icon: {
        width: 120,
        height: 140,
        borderRadius: 5,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    headerLeft: {
        width: 9,
        height: 20,
        backgroundColor: '#199ED8',
    },
    pageHeader: {
        marginTop: 5,
        marginRight: 10,
        height: 20,
    },
    h1: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222',
    },
    p: {
        fontSize: 14,
        // color: '#777777',
        color: 'rgba(0, 0, 0, 0.8)',
        marginTop: 3,
    },
    button: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        height: 24,
        marginLeft: 20,
        // marginRight: 20,
    },
    buttonText: {
        borderWidth: 1,
        borderColor: '#b2b2b2',
        padding: 2,
        borderRadius: 2,
        paddingLeft: 10,
        paddingRight: 10,

        textAlign: 'center',
        fontWeight: '200',
        fontSize: 13,
        color: 'rgba(0, 0, 0, 0.65)',

    },
    message: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
    messageText: {
        textAlign: 'center',
        fontWeight: '200',
        fontSize: 10,
        color: '#FFF',
        height: 19,
        width: 38,
        lineHeight: 19,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'red',
        borderRadius: 15,
    }

});

export default PeopleInvolved;