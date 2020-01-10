import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    Image,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
    FlatList,
    SectionList,
    Modal,
    Dimensions,
    Button,
    Picker,
    TouchableWithoutFeedback,
    Alert,
} from 'react-native';
import {Formik, Field, Form} from 'formik';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// let ScreenWidth = Dimensions.get('window').width;
const {width, height} = Dimensions.get('window');

import {SwipeListView} from 'react-native-swipe-list-view';
import Swipeout from 'react-native-swipeout';
// import imgUrl from '/src/pages/PoliceInquiry/imgs/image.jpg';
import imgUrl from './imgs/image.jpg';


class PoliceMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "2016-05-15",
            upload: 'yes',
            data: [
                {
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
                    warning: '2018-1121-221',
                    img:imgUrl
                },
                {
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
                    warning: '2018-1121-221',
                    img:imgUrl
                },
                {
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
                },
                {
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
                },
                {
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
                },
            ]
        }
    }

    componentDidMount() {
        // console.log('Home',this.props);
    }


    renderItemView = ({item}) => {
        return (
            <View style={styles.container} key={item.num}>
                {/*<Image source={{uri: imgUrl}} style={styles.icon}/>*/}
                {item.hasOwnProperty('img') ?
                    <Image source={imgUrl} style={styles.icon}/>
                    :null}
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>警情编号{item.num}</Text>
                    <Text style={styles.p} numberOfLines={0}>报警地址{item.address}</Text>
                    <Text style={styles.p} numberOfLines={0}>管辖单位{item.unit}</Text>
                    <Text style={styles.p} numberOfLines={0}>报警时间{item.time}</Text>
                    {/*<View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Text>{item.price}元</Text>
                    </View>*/}
                    <View style={styles.btn}>
                        <TouchableWithoutFeedback
                            style={[styles.btn, {backgroundColor: '#ccc'}]}
                            onPress={() => {

                            }}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>
                                    上传状态
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        );
    };

    //绘制侧滑视图
    renderQuickActions({item}) {
        return (
            <View style={styles.actionsContainer} key={item.num} >
                <TouchableHighlight
                    underlayColor={'#b2b2b2'}
                    style={[styles.actionButton,{backgroundColor:'#b2b2b2'}]}
                    onPress={() => {
                        Alert.alert(
                            '收藏',
                            '收藏成功！',
                        );
                    }}>
                    <Text style={styles.actionButtonText}>收藏</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor={'rgb(24, 144, 255)'}
                    style={[styles.actionButton,{backgroundColor:'rgb(24, 144, 255)'}]}
                    onPress={() => {
                       /* Alert.alert(
                            '案件串并' + item.mname,
                            item.title,
                        );*/
                        Alert.alert(
                            '案件串并',
                            '案件串并成功！',
                        );
                    }}>
                    <Text style={styles.actionButtonText}>案件串并</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor={'rgb(250, 204, 20)'}
                    style={[styles.actionButton,{backgroundColor:'rgb(250, 204, 20)'}]}
                    onPress={() => {
                        Alert.alert(
                            '一键入池',
                            '一键入池成功！',
                        );
                    }}>
                    <Text style={styles.actionButtonText}>一键入池</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor={'rgb(19, 194, 194)'}
                    style={[styles.actionButton,{backgroundColor:'rgb(19, 194, 194)'}]}
                    onPress={() => {
                        Alert.alert(
                            '加入并案',
                            '加入并案成功！',
                        );
                    }}>
                    <Text style={styles.actionButtonText}>加入并案</Text>
                </TouchableHighlight>
            </View>
        );
    }

    extraUniqueKey = (item, index) => {
        return "index" + index + item;
    };

    renderItem = () => {

        let data = this.state.data;
        let swipeoutBtns = [

            {
                backgroundColor:'blue',
                color:'white',
                text:'R2',
                height:300,
                onPress:()=>{this.aaaa()},
                component: [<View style={{justifyContent: 'center'}}>
                    <Text>22</Text>
                </View>],
            },
            {
                backgroundColor:'green',
                color:'white',
                text:'R3',
                onPress:()=>{this.aaaa()}
            },
        ];
        return(
            this.state.data.map((item) => {
                let imageUrl = item.squareimgurl.replace('w.h', '160.0').replace('http', 'https');
                console.log('item', item);
                let BtnsLeft = [{ text: '清空', type: 'delete',  onPress: ()=> console.log('清空列表')}];
                return (
                    <Swipeout right={swipeoutBtns}
                              left={BtnsLeft}
                              key={item.mnane}
                              // close={!(this.state.sectionID === 'historylist' && this.state.rowID === Id)}
                              // rowID={Id}
                              // sectionID='historylist'
                              // autoClose={true}
                              // backgroundColor='white'
                              /*onOpen={(sectionId, rowId, direction: string) => {
                                  this.setState({
                                      rowID: rowId,
                                      sectionID: sectionId
                                  });
                              }}*/
                              // scroll={event => console.log('scroll event') }
                    >
                        <View>
                            <Text>Swipe me left</Text>
                        </View>
                    </Swipeout>

                );
                /*return (
                     <Swipeout right={swipeoutBtns}
                               style={{height:300,flex:1,borderWidth:1,borderColor:'gray',marginTop:10}}
                               key={item.mname}
                               buttonHeight={300}

                     >
                         <View style={{height:300,width:'auto',padding:20}}>
                                 {/!*<Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} style={{height:200}}/>*!/}
                                 <Text>ddddddddddddd</Text>

                         </View>
                     </Swipeout>

                 );*/
            })
        )


    };


    render() {
        return (
            <SwipeListView
                style={{padding:10}}
                data={this.state.data}
                renderItem={this.renderItemView.bind(this)}
                renderHiddenItem={this.renderQuickActions.bind(this)}

                disableRightSwipe={true}
                // leftOpenValue={75}
                rightOpenValue={-320}
            />
        );
    }
   /* render() {
        let swipeoutBtns = [
            {
                text: 'Button'
            }
        ];

        return (
            <ScrollView style={{flex:1}}>
                {/!*{this.renderItem()}*!/}

                <Swipeout right={swipeoutBtns}
                          autoClose={true}
                          close={true}

                >
                    <View>
                        <Text>Swipe me left</Text>
                    </View>
                </Swipeout>
                <Swipeout right={swipeoutBtns}
                          autoClose={true}
                          close={true}

                >
                    <View>
                        <Text>Swipe me left</Text>
                    </View>
                </Swipeout>
            </ScrollView>

        );
    }*/
}
// Police details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width - 20,
        padding: 12,
        // borderBottomWidth: 1,
        borderWidth: 1,
        borderColor: '#e9e9e9',
        backgroundColor: 'white',
        textAlign: 'center',
        paddingTop:7,
        paddingBottom:7,
        marginBottom:10
    },
    icon: {
        width: width - 44,
        height: 184,
        borderRadius: 5,
        marginBottom:10,
    },
    rightContainer: {
        flex: 1,
        height:100,
        fontSize:14,
        color:'#333333'
    },
    p: {
        fontSize: 14,
        color: '#333333',
        marginTop: 8,
        fontWeight:'normal'
    },
    actionsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    actionButton: {
        padding: 20,
        // width: 80,
        width: 80,
        marginBottom:10,
        justifyContent: 'center',
    },
    actionButtonText: {
        textAlign: 'center',
        color:'#fff',
        fontSize:18,
    },
    btn: {
        position:'absolute',
        right:0,
        bottom:0,
        height:24,
        marginLeft: 20,
        marginRight: 20,
    },
    button: {
        borderWidth: 1,
        borderColor: '#b2b2b2',
        padding:3,
        textAlign:'center',
        borderRadius:2,
        paddingLeft:10,
        paddingRight:10
    },
    buttonText:{
        textAlign:'center',
        fontWeight:'200',
        fontSize:13,
        color: 'rgba(0, 0, 0, 0.65)',

    }
});
export default PoliceMessage;
