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


class PoliceDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upload: 1,
            btnVisible: false,
            data: {
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
                <View style={[styles.rowContent, {flex: 1, flexDirection: 'row'}]}>
                    <Text style={styles.headerLeft}></Text>
                    <Text style={styles.pageHeader}>
                        警情信息
                    </Text>
                </View>
                <View style={styles.rowContent}>
                    <Text style={styles.detailTitle}>事件编号：</Text>
                    <Text style={styles.detailCon}>{data.num}</Text>
                </View>
                <View style={[styles.rowContent, styles.rowContentColor]}>
                    <Text style={styles.detailTitle}>报警类别：</Text>
                    <Text style={styles.detailCon}>{data.sort}</Text>
                </View>
                <View style={styles.rowContent}>
                    <Text style={styles.detailTitle}>报警类型：</Text>
                    <Text style={styles.detailCon}>{data.type}</Text>
                </View>
                <View style={[styles.rowContent, styles.rowContentColor]}>
                    <Text style={styles.detailTitle}>报警细类：</Text>
                    <Text style={styles.detailCon}>{data.fineClass}</Text>
                </View>
                <View style={styles.rowContent}>
                    <Text style={styles.detailTitle}>报警人：</Text>
                    <Text style={styles.detailCon}>{data.person}</Text>
                </View>
                <View style={[styles.rowContent, styles.rowContentColor]}>
                    <Text style={styles.detailTitle}>联系电话：</Text>
                    <Text style={styles.detailCon}>{data.phone}</Text>
                </View>
                <View style={styles.rowContent}>
                    <Text style={styles.detailTitle}>报警时间：</Text>
                    <Text style={styles.detailCon}>{data.time}</Text>
                </View>
                <View style={[styles.rowContent, styles.rowContentColor]}>
                    <Text style={styles.detailTitle}>案发场所类型：</Text>
                    <Text style={styles.detailCon}>{data.placeType}</Text>
                </View>
                <View style={styles.rowContent}>
                    <Text style={styles.detailTitle}>事件详情：</Text>
                    <Text style={styles.detailCon}>{data.detail}</Text>
                </View>
                <View style={[styles.rowContent, styles.rowContentColor]}>
                    <Text style={styles.detailTitle}>经度：</Text>
                    <Text style={styles.detailCon}>{data.longitude}</Text>
                </View>
                <View style={styles.rowContent}>
                    <Text style={styles.detailTitle}>纬度：</Text>
                    <Text style={styles.detailCon}>{data.latitude}</Text>
                </View>
                <View style={[styles.rowContent, styles.rowContentColor]}>
                    <Text style={styles.detailTitle}>事发地址：</Text>
                    <Text style={styles.detailCon}>{data.address}</Text>
                </View>
                <View style={styles.rowContent}>
                    <Text style={styles.detailTitle}>辖区单位：</Text>
                    <Text style={styles.detailCon}>{data.unit}</Text>
                </View>
                <View style={[styles.rowContent, styles.rowContentColor]}>
                    <Text style={styles.detailTitle}>处理结果：</Text>
                    <Text style={styles.detailCon}>{data.result}</Text>
                </View>
                <View style={styles.rowContent}>
                    <Text style={styles.detailTitle}>立案状态：</Text>
                    <Text style={styles.detailCon}>{data.status}</Text>
                </View>
                <View style={[styles.rowContent, styles.rowContentColor]}>
                    <Text style={styles.detailTitle}>警情下发时间：</Text>
                    <Text style={styles.detailCon}>{data.warning}</Text>
                </View>
               {/* <View style={[{height:100}]}>
                    <TouchableWithoutFeedback onPress={this.showBtn} >
                        <View style={styles.icons}>
                            <Ionicons name='ios-menu' size={25}/>
                        </View>
                    </TouchableWithoutFeedback>
                    {btnVisible ?
                        <View style={styles.btns} >

                        </View>
                        : <View></View>
                    }
                </View>*/}
                <View style={[{height:100,color:'#fff'}]}>
                    <ActionButton buttonColor="rgba(25,158,216,1)"
                                  position='left'
                                  verticalOrientation='up'
                                  offsetY ={-200}
                                  spacing={10}
                                  size={40}
                                  degrees={180}
                                  renderIcon={() => (
                                      <Icon name="ios-menu" style={styles.actionButtonIcon} />
                                      )}
                                  style={styles.actionButton}>
                        <ActionButton.Item buttonColor='#9b59b6' title="地图信息" onPress={() => console.log("地图信息")}>
                            <Icon name="md-locate" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#3498db' title="警情线索" onPress={() => this.props.navigation.navigate('PoliceClue')}>
                            <Icon name="ios-notifications" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#1abc9c' title="涉案人员"  onPress={() => this.props.navigation.navigate('PeopleInvolved')}>
                            <Icon name="ios-people" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#9b59b6' title="涉案车辆" onPress={() => console.log("notes tapped!")}>
                            <Icon name="ios-car" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#3498db' title="现勘信息" onPress={() => {}}>
                            <Icon name="ios-eye" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#1abc9c' title="关联案件"  onPress={() => {}}>
                            <Icon name="ios-git-branch" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                    </ActionButton>
                </View>



                {/*<ActionButton
                    buttonColor="rgba(231,76,60,1)"
                    onPress={() => { alert('你点了我！')}}
                    renderIcon={() => (
                        <View style={styles.actionButtonView}><Icon name="ios-create-outline" style={styles.actionButtonIcon} />
                        <Text style={styles.actionButtonText}>新增</Text>
                    </View>)}
                />*/}

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

export default connect(mapStateToProps)(PoliceDetails);

