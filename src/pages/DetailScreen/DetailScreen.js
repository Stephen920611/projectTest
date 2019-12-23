import React from 'react';
import { connect } from 'react-redux';
import { testDetail } from './../../action/detailScreen';

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
        console.log(this.props,'ssssss');
    }

    testPress = () => {
        this.props.dispatch(testDetail())
    };

    render() {
        const { detailScreenReducer } = this.props;
        const {count} = detailScreenReducer;
        console.log('detailScreenReducer:',detailScreenReducer);
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen-----{count}</Text>
                <Button
                    title="Go to HomeScreen"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="触发reducer"
                    onPress={() => this.testPress()}
                />
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        detailScreenReducer: state.detailScreenReducer
    };
};

export default connect(mapStateToProps)(DetailScreen);