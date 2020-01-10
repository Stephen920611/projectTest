import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
    Alert,
    Button,
} from 'react-native';
import {Formik, Field, Form} from 'formik';
import {SwipeListView} from 'react-native-swipe-list-view';
import imgUrl from '../PoliceIntelligence/imgs/image.jpg';

const {width, height} = Dimensions.get('window');

class PolicePoolMessage extends React.Component {
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

    static navigationOptions = ({ navigation,state }) => {
        // console.log('navigation',state);
        // console.log('this.props',navigation.getParam('total'));
        return {
            headerBackTitle: '返回',
            title:'警情池11',
            headerStyle: {
                backgroundColor: '#fff'
            },
            headerRight: (
                <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                    color="#fff"
                />
            ),
        };
    };


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
                    <Text style={styles.p} numberOfLines={0}>入池时间{item.time}</Text>
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
                    underlayColor={'rgb(24, 144, 255)'}
                    style={[styles.actionButton,{backgroundColor:'rgb(24, 144, 255)'}]}
                    onPress={() => {
                        Alert.alert(
                            '案件串并',
                            '案件串并成功！',
                        );
                    }}>
                    <Text style={styles.actionButtonText}>案件串并</Text>
                </TouchableHighlight>
            </View>
        );
    }

    render() {
        return (
            <SwipeListView
                style={{padding:10}}
                data={this.state.data}
                renderItem={this.renderItemView.bind(this)}
                renderHiddenItem={this.renderQuickActions.bind(this)}
                closeOnRowBeginSwipe={true}
                disableRightSwipe={true}
                rightOpenValue={-80}
            />
        );
    }
}


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
export default PolicePoolMessage;
