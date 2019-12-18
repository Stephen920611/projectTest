/**
 * @description
 * @Version Created by user on 2019/12/17.
 * @Author user
 * @license dongfangdianzi
 */
import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

class DetailScreen extends React.Component {
    componentDidMount() {
        // console.log('Details',this.props);
        // console.warn('YellowBox is disabled.');
    }
    static navigationOptions = {
        tabBarLabel: 'Details',
        headerTitle: '好友',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to HomeScreen"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
export default DetailScreen;