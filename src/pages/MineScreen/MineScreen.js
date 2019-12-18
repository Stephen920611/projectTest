import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class MineScreen extends React.Component {
    componentDidMount() {
        // console.log('Home',this.props);
    }
    //tab键的名字，app.js设置也可以
    //顶部标题
    /*static navigationOptions = {
        title: 'MineScreen',
    };*/

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>MineScreen Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}
export default MineScreen;