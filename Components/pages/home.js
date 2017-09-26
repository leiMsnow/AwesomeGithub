import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Button
                    title='open user info'
                    onPress={() => navigate('Details', {user: 'ray'})}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
