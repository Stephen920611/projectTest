import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TextInput,
    Dimensions,
    Button,
    Picker,
    TouchableWithoutFeedback,
} from 'react-native';
import {Formik, Field, Form} from 'formik';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { RadioButtons } from 'react-native-radio-buttons';
import {RadioGroup, RadioButton} from '../../../src/components/Radio'
// import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

// let ScreenWidth = Dimensions.get('window').width;
const {width, height} = Dimensions.get('window');
import DatePicker from 'react-native-datepicker';


class PoliceInquiry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "2016-05-15",
            upload: 'yes',
        }
    }

    componentDidMount() {
        // console.log('Home',this.props);
    }

    //未解决，不能放在form表单里
    onSelect(index, value) {
        // console.log(`Selected index: ${index} , value: ${value}`);
        this.setState({
            upload: value,
        })
    }

    submitForm = (values) => {
        values.upload = this.state.upload;
        console.log('表单的值', values)
        //values为表单的值
    };


    render() {
        return (
            <ScrollView style={[styles.tabView,]} >
                <Formik
                    initialValues={{
                        code: '',
                        department: 'Java',
                        color: 'Java',
                        startTime: '2016-05-15',
                        endTime: '2016-05-15',
                        eventCategory: 'Java',
                        eventType: 'Java',
                        eventClass: 'Java',
                        upload: 'yes'
                    }}
                    onSubmit={(values) => this.submitForm(values)}
                >
                    {({handleChange, handleBlur, handleSubmit, resetForm, values}) => (
                        <View>
                            <View style={styles.textInput}>
                                <Text style={styles.label}>事件编号：</Text>
                                <TextInput
                                    style={[styles.textBorder,{paddingLeft:15}]}
                                    onChangeText={handleChange('code')}
                                    onBlur={handleBlur('code')}
                                    value={values.code}
                                    placeholder='请输入事件编号'
                                />
                            </View>
                            <View style={styles.textInput}>
                                <Text style={styles.label}>部门列表：</Text>
                                <View style={styles.textBorder}>
                                    <Picker
                                        style={[styles.textBorder, {height: 'auto'}]}
                                        name={'department'}
                                        selectedValue={values.department}
                                        onValueChange={handleChange('department')}>
                                        <Picker.Item label="Java" value="Java"/>
                                        <Picker.Item label="JavaScript" value="JavaScript"/>
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.textInput}>
                                <Text style={styles.label}>开始时间：</Text>
                                <View style={styles.textBorder}>
                                    <DatePicker
                                        style={{width: 200, height: 24}}
                                        date={values.startTime}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        minDate="2016-05-01"
                                        maxDate="2016-06-01"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                position: 'absolute',
                                                left: 10,
                                                top: 2,
                                                marginLeft: 0,
                                                height: 22,
                                                width: 22,
                                                // marginTop:-15,
                                                // borderWidth:0
                                            },
                                            dateInput: {
                                                marginLeft: 30,
                                                height: 'auto',
                                                borderWidth: 0,
                                                marginTop: -15,
                                                fontSize: 13
                                            }
                                        }}
                                        // onDateChange={(date) => {this.setState({date: date})}}
                                        onDateChange={handleChange('startTime')}
                                    />
                                </View>
                            </View>
                            <View style={styles.textInput}>
                                <Text style={styles.label}>结束时间：</Text>
                                <View style={styles.textBorder}>
                                    <DatePicker
                                        style={{width: 200, height: 24}}
                                        date={values.endTime}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        minDate="2016-05-01"
                                        maxDate="2016-06-01"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                position: 'absolute',
                                                left: 10,
                                                top: 2,
                                                marginLeft: 0,
                                                height: 22,
                                                width: 22,
                                                // marginTop:-15,
                                                // borderWidth:0
                                            },
                                            dateInput: {
                                                marginLeft: 30,
                                                height: 'auto',
                                                borderWidth: 0,
                                                marginTop: -15,
                                                fontSize: 13
                                            }
                                        }}
                                        // onDateChange={(date) => {this.setState({date: date})}}
                                        onDateChange={handleChange('endTime')}
                                    />
                                </View>
                            </View>
                            <View style={styles.textInput}>
                                <Text style={styles.label}>事件类别：</Text>
                                <View style={styles.textBorder}>
                                    <Picker
                                        style={[styles.textBorder, {height: 'auto'}]}
                                        name={'eventCategory'}
                                        selectedValue={values.eventCategory}
                                        onValueChange={handleChange('eventCategory')}>
                                        <Picker.Item label="Java" value="Java"/>
                                        <Picker.Item label="JavaScript" value="JavaScript"/>
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.textInput}>
                                <Text style={styles.label}>事件类型：</Text>
                                <View style={styles.textBorder}>
                                    <Picker
                                        style={[styles.textBorder, {height: 'auto'}]}
                                        name={'eventType'}
                                        selectedValue={values.eventType}
                                        onValueChange={handleChange('eventType')}>
                                        <Picker.Item label="Java" value="Java"/>
                                        <Picker.Item label="JavaScript" value="JavaScript"/>
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.textInput}>
                                <Text style={styles.label}>事件细类：</Text>
                                <View style={styles.textBorder}>
                                    <Picker
                                        style={[styles.textBorder, {height: 'auto'}]}
                                        name={'eventClass'}
                                        selectedValue={values.eventClass}
                                        onValueChange={handleChange('eventClass')}>
                                        <Picker.Item label="Java" value="Java"/>
                                        <Picker.Item label="JavaScript" value="JavaScript"/>
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.textInput}>
                                <Text style={styles.label}>是否上传：</Text>
                                <View style={{flex: 8}}>
                                    <RadioGroup
                                        style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}
                                        // onSelect={handleChange('upload')}
                                        onSelect={(index, value) => this.onSelect(index, value)}
                                        // selectedIndex={1}
                                        selectedValue={this.state.upload}
                                    >
                                        <RadioButton value={'yes'}>
                                            <Text>是</Text>
                                        </RadioButton>
                                        <RadioButton value={'no'}>
                                            <Text>否</Text>
                                        </RadioButton>
                                        <RadioButton value={'all'}>
                                            <Text>全部</Text>
                                        </RadioButton>
                                    </RadioGroup>
                                </View>

                            </View>
                            <View style={styles.btns}>
                                <View style={styles.btn}>
                                    <Button onPress={handleSubmit} title="查询"/>
                                </View>
                                <View style={styles.btn}>
                                    <TouchableWithoutFeedback
                                        style={[styles.btn, {backgroundColor: '#ccc'}]}
                                        onPress={() => {
                                            resetForm();
                                            this.setState({
                                                upload: 'yes'
                                            })
                                        }}
                                    >
                                        <View style={styles.button}>
                                            <Text style={styles.buttonText}>
                                                重置
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>


                            </View>
                        </View>
                    )}
                </Formik>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        flexDirection: 'row',
        height: 34,
        lineHeight: 34,
        margin: 10,
    },
    label: {
        flex: 2,
        fontSize: 16,
        padding: 5,
    },
    textBorder: {
        borderWidth: 1,
        borderColor: '#c6cfd6',
        borderRadius: 5,
        padding: 5,
        flex: 8,
        fontSize: 13,
    },
    btns: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        // bottom:20,
        marginTop: 230,
        // position:'absolute',
        paddingLeft: 60,
        paddingRight: 60
    },
    btn: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
    },
    button: {
        borderWidth: 1,
        borderColor: '#b2b2b2',
        padding:7,
        textAlign:'center',
        borderRadius:2,
    },
    buttonText:{
        textAlign:'center',
        fontWeight:'200',
        fontSize:14,
        color: 'rgba(0, 0, 0, 0.65)',

    }

});
export default PoliceInquiry;
