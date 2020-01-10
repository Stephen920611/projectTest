import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class PoliceIntelligence extends React.Component {
    componentDidMount() {
        // console.log('Home',this.props.navigation.navigate('PoliceInquiry'));
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/*<FontAwesome
                    name="angle-left"
                    size={26}
                    style={{ color: 'black' }}
                />
                <Text>HomeScreen Screen</Text>*/}
                {/* <Button
                    title="TabBar"
                    onPress={() => this.props.navigation.navigate('TabBar')}
                />*/}
                <View style={{marginBottom:10}}>
                    <Button
                        title="警情事件查询"
                        onPress={() => this.props.navigation.navigate('PoliceInquiry')}
                    />
                </View>
                <View style={{marginBottom:10}}>
                    <Button
                        title="警情库"
                        onPress={() => this.props.navigation.navigate('PoliceMessage')}
                    />
                </View>
                <View style={{marginBottom:10}}>
                    <Button
                        title="警情详情"
                        onPress={() => this.props.navigation.navigate('PoliceDetails')}
                    />
                </View>
                <View style={{marginBottom:10}}>
                    <Button
                        title="警情线索"
                        onPress={() => {
                            // this.props.navigation.navigate('PoliceClue')
                            this.props.navigation.navigate('PoliceClue', {
                                total: '86',
                            });
                        }}
                    />
                </View>
                <View style={{marginBottom:10}}>
                    <Button
                        title="涉案人员"
                        onPress={() => {
                            // this.props.navigation.setParams({ total: 222 });
                            // this.props.navigation.navigate('PeopleInvolved')
                            this.props.navigation.navigate('PeopleInvolved', {
                                total: '222',
                            });
                        }}
                    />
                </View>
                <View style={{marginBottom:10}}>
                    <Button
                        title="地图信息"
                        onPress={() => {
                            this.props.navigation.navigate('PoliceMap');
                        }}
                    />
                </View>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />


                {/*<Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />*/}
            </View>
        );
    }
}
