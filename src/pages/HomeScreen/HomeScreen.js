import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';


class HomeScreen extends React.Component {
    state = {
        data: [
            {
                title: '警情库',
                address: 'PoliceIntelligence'
            },
            {
                title: '情报池',
                address: 'PolicePool'
            },
            {
                title: '案件库'
            },
            {
                title: '专案库'
            },
            {
                title: '串并案库'
            },
            {
                title: '结案库'
            },
        ],
        dataList: [
            {
                name: '莱州文昌所',
                address: '莱州文昌所',
                num: '12345',
                color: '#FFFF00'
            },
            {
                name: '莱州文昌所',
                address: '莱州文昌所',
                num: '12345',
                color: '#CCC'
            },
            {
                name: '莱州文昌所',
                address: '莱州文昌所',
                num: '12345',
                color: '#FF6600'
            },
            {
                name: '莱州文昌所',
                address: '莱州文昌所',
                num: '12345',
                color: '#009DD9'
            },
            {
                name: '莱州文昌所',
                address: '莱州文昌所',
                num: '12345',
                color: '#13c2c2'
            },
        ]
    };

    componentDidMount() {
        // console.log('Home1111',this.props.navigation.navigate('PoliceIntelligence'));
    }

    renderItem = () => {
        const {policeClue} = this.props;
        const {dataList} = this.state;
        // const {dataList} = this.state;
        return (
            dataList.map((item, index) => {
                return (
                    <View style={styles.listItem} key={index}>
                        <View style={{flexDirection: 'row',}}>
                            <Text style={[styles.index, {backgroundColor: item.color}]}>
                                {index + 1}
                            </Text>
                            <View>
                                <Text style={styles.title}>
                                    {item.name}
                                </Text>
                                <Text style={styles.address}>
                                    {item.address}
                                </Text>
                            </View>

                        </View>

                        <View>
                            <Text style={styles.num}>
                                {item.num}
                            </Text>
                        </View>
                    </View>

                )
            })
        )
    };
    handlePress = (item, e) => {
        this.props.navigation.navigate(item.hasOwnProperty('address') ? item.address:'');
        // this.props.navigation.push('PoliceIntelligence');
    };

    render() {
        const {data} = this.state;
        return (
            <View style={{flex: 1,}}>
                <View style={[styles.container]}>
                    {data.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={this.handlePress.bind(this, item)}
                        >
                            <View style={styles.btns}>
                                <Text style={styles.btnTitle}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>

                    ))}
                </View>
                <ScrollableTabView
                    style={styles.tabContainer}
                    renderTabBar={() => <DefaultTabBar/>}
                    tabBarUnderlineStyle={styles.lineStyle}
                    tabBarActiveTextColor='#1890ff'
                    tabBarTextStyle={styles.tabView}
                >
                    <ScrollView tabLabel="部门上传排行" >
                        {this.renderItem()}
                        <TouchableOpacity
                            onPress={() => {
                                alert('点击了查看全部')
                            }}
                        >
                            <View style={styles.buttonText}>
                                <Text >
                                    查看全部
                                </Text>
                                <FontAwesome
                                    name="angle-double-right"
                                    size={25}
                                    style={{color: 'black',height:20,lineHeight:22}}
                                />
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                    <ScrollView tabLabel="个人上传排行" style={styles.scrollViewCon}>
                        {this.renderItem()}
                    </ScrollView>
                </ScrollableTabView>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 230,
        padding: 10,
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    btns: {
        width: 218,
        height: 62,
        // lineHeight:62,
        backgroundColor: '#F2F2F2',
        marginBottom: 12
    },
    btnTitle: {
        height: 62,
        lineHeight: 62,
        fontSize: 18,
        textAlign: 'center',
    },
    tabContainer: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        marginBottom: 0
    },
    lineStyle: {
        width: width / 2,
        height: 0,
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
        height: 'auto'
    },
    listItem: {
        height: 66,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        flexDirection: 'row',
        padding: 11,
        justifyContent: 'space-between'
    },
    index: {
        width: 40,
        height: 40,
        // backgroundColor:'#FFFF00',
        textAlign: 'center',
        lineHeight: 40,
        borderWidth: 1,
        borderColor: '#797979',
        borderRadius: 50,
        fontSize: 18,
        color: 'rgba(0, 0, 0, 0.8)',
        marginRight: 10
    },
    title: {
        fontSize: 16
    },
    address: {
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.7)',
    },
    num: {
        width: 63,
        height: 28,
        lineHeight: 28,
        backgroundColor: '#D7D7D7',
        color: '#797979',
        borderRadius: 10,
        fontSize: 13,
        textAlign: 'center',
        marginTop: 6

    },
    buttonText: {
        marginTop: 20,
        height:20,
        lineHeight:20,
        justifyContent:'flex-end',
        fontSize: 14,
        flexDirection: 'row',
    }

});

export default HomeScreen
