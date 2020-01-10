import React from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Button,
    Picker,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import {Formik, Field, Form} from 'formik';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


// let ScreenWidth = Dimensions.get('window').width;
const {width, height} = Dimensions.get('window');

import {SwipeListView} from 'react-native-swipe-list-view';
import Swipeout from 'react-native-swipeout';

import { policeDetails } from '../../action/policeDetails.js';
import imgUrl from '../PoliceIntelligence/imgs/image.jpg';



class PolicePoolDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upload: 1,
            btnVisible: false,
            data: {
                num: '3475411215454212344344',
                sort: '群众求助',
                time: '2018-07-14 10:00:00',
                detail: '事件详情，事件详情，事件详情，事件详情事件详情事件详情，事件详情事件详情事件详情',
                address: '山东省莱州市电业局对面新号动力',
                unit: '莱州市公安局',
                status: '已上传',
            }
        }
    }

    componentDidMount() {
        // console.log('Home',this.props);
    }

    showBtn = () => {
        const {btnVisible} = this.state;
        // console.log('111111',btnVisible);
        this.props.dispatch(policeDetails())
    };


    render() {
        const {policeDetails} = this.props;
        // console.log('this.props',this.props);
        const {data, btnVisible} = policeDetails;
        return (
            <ScrollView style={{flex: 1}}>
                <View style={[styles.rowContent, {flex: 1, flexDirection: 'row',borderBottomWidth:0}]}>
                    <Text style={styles.headerLeft}></Text>
                    <Text style={styles.pageHeader}>
                        警情信息
                    </Text>
                </View>
                <View style={styles.img}>
                    <Image source={imgUrl} style={styles.icon}/>
                </View>
                <View style={[styles.rowContent,{borderTopWidth:1,borderTopColor:'#797979'}]}>
                    <Text style={styles.detailTitle}>警情编号：</Text>
                    <Text style={styles.detailCon}>{data.num}</Text>
                </View>
                <View style={[styles.rowContent, styles.rowContentColor]}>
                    <Text style={styles.detailTitle}>事件类别：</Text>
                    <Text style={styles.detailCon}>{data.sort}</Text>
                </View>
                <View style={[styles.rowContent]}>
                    <Text style={styles.detailTitle}>报警地址：</Text>
                    <Text style={styles.detailCon}>{data.address}</Text>
                </View>
                <View style={[styles.rowContent, styles.rowContentColor]}>
                    <Text style={styles.detailTitle}>事件描述：</Text>
                    <Text style={styles.detailCon}>{data.detail}</Text>
                </View>
                <View style={styles.rowContent}>
                    <Text style={styles.detailTitle}>管辖单位：</Text>
                    <Text style={styles.detailCon}>{data.unit}</Text>
                </View>
                <View style={[styles.rowContent, styles.rowContentColor]}>
                    <Text style={styles.detailTitle}>入池时间：</Text>
                    <Text style={styles.detailCon}>{data.time}</Text>
                </View>
                <View style={styles.rowContent}>
                    <Text style={styles.detailTitle}>上传状态：</Text>
                    <Text style={styles.detailCon}>{data.status}</Text>
                </View>

            </ScrollView>

        );
    }
}

// Police details

const styles = StyleSheet.create({
    pageHeader: {
        fontSize: 16,
        height: 32,
        lineHeight: 32,
    },
    headerLeft: {
        width: 10,
        height: 22,
        backgroundColor: '#199ED8',
        marginTop: 5,
        marginRight: 10,
    },
    img:{
        height:182,
        // backgroundColor:'gray',
        padding:10,
        paddingTop:2
    },
    icon: {
        width: width - 20,
        height: 170,
        borderRadius: 5,
        marginBottom:10,
    },
    rowContent: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomColor: '#797979',
        borderBottomWidth: 1,
        fontFamily: 'Arial',
        fontWeight: 'normal',
        fontSize: 14,
    },
    rowContentColor: {
        backgroundColor: '#E4E4E4',
    },
    detailTitle: {
        height: 32,
        lineHeight: 32,
    },
    detailCon: {
        // height:34,
        lineHeight: 32,
        flex: 1,
        color: 'rgba(0, 0, 0, 0.8)',
        paddingLeft: 15
        // flexWrap:'wrap',
        // flexDirection:'row',
        // justifyContent:'space-between',
        // alignItems:'center',

    },
    icons: {
        width: 36,
        height: 36,
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        lineHeight: 36,
        padding: 5,
        position: 'absolute',
        left: 20,
        bottom:0,
    },
    btns:{
        width:100,
        height:100,
        backgroundColor:'#199ED8',
        position:'absolute',
        left:200
    },
    actionButton:{
        color:'#fff'
    },
    actionButtonIcon:{
        color:'#fff',
        fontSize:25
    },

});

const mapStateToProps = (state, ownProps) => {
    // console.log('22222222222',state);
    // console.log('ownProps',ownProps);
    return {
        ...ownProps,
        policeDetails: state.policeDetails
    };
};

export default connect(mapStateToProps)(PolicePoolDetails);

