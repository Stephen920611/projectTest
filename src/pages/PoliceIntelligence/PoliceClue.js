import React from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import imgUrl from './imgs/image.jpg';

const {width, height} = Dimensions.get('window');
let ScreenWidth = Dimensions.get('window').width;
import { policeClue } from '../../action/policeClue.js';

class PoliceClue extends React.Component {
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

    componentDidMount() {
        // console.log('Home',this.props);
    }

    //tab键的名字，app.js设置也可以
    //顶部标题
    /*static navigationOptions = {
        headerBackTitle: '返回',
        // title:'警情线索('+ this.state.total +')',//undefined 放在reducer里（未试）
        // title: '+ this.state.total,
        // title: ({navigation}) =>`Chat with $ {navigation.state.params.key}`,
        title: ({navigation}) =>'duhygtdff',
        headerStyle: {
            backgroundColor: '#fff'
        }
    };*/
    static navigationOptions = ({ navigation,state }) => {
        // console.log('navigation',state);
        // console.log('this.props',navigation.getParam('total'));
        return {
            headerBackTitle: '返回',
            title: '警情线索(' + navigation.getParam('total') +')',
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
        const {policeClue} = this.props;
        const {dataList} = policeClue;
        // const {dataList} = this.state;
        return (
            dataList.map((item, index) => {
                return (
                    <View style={styles.tabContainer} key={index}>
                        <View style={styles.tabContainerTop}>
                            <Image source={imgUrl} style={styles.icon}/>
                            <View style={styles.rightContainer}>
                                <View>
                                    <Text>上传人员：{item.name}</Text>
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
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={[styles.headerLeft, styles.pageHeader]}></Text>
                                    <Text style={styles.pageHeader}>
                                        描述信息:
                                    </Text>
                                </View>
                                <Text style={styles.p} numberOfLines={3} ellipsizeMode='tail'>{item.dec}</Text>
                            </View>
                        </View>
                        <View>
                            <Text>上传时间：{item.time}</Text>
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
                <ScrollView tabLabel={"摄像机(" + data.camera + ")"}>
                    <View style={styles.textStyle}>
                        <Text>摄像机</Text>
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
        width: ScreenWidth / 4,
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
        borderColor: '#e9e9e9',
        backgroundColor: 'white',
        borderWidth: 1,
        height: 147,
        marginBottom: 12
    },
    tabContainerTop: {
        flex: 1,
        flexDirection: 'row',
    },
    icon: {
        width: 148,
        height: 109,
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
        color: '#777777',
        marginTop: 7,
    },
    button: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        height: 24,
        marginLeft: 20,
        marginRight: 20,
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
        fontSize: 13,
        color: '#FFF',
        height: 24,
        width: 47,
        lineHeight: 24,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'red',
        borderRadius: 15,
    }

});
//People involved
const mapStateToProps = (state, ownProps) => {
    console.log('22222222222',state);
    console.log('ownProps',ownProps);
    return {
        ...ownProps,
        policeClue: state.policeClue
    };
};

export default connect(mapStateToProps)(PoliceClue);

// export default PoliceClue;