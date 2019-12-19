import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class MineScreen extends React.Component {
    componentDidMount() {
        // console.log('Home',this.props);
    }

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