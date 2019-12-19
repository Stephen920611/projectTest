import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


class LogoTitle extends React.Component {
    render() {
        return <Ionicons name='ios-add' size={25} color={tintColor} />
    }
}

class DetailScreen extends React.Component {
    componentDidMount() {
        // console.log('Details',this.props);
        // console.warn('YellowBox is disabled.');
    }
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