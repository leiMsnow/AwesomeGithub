import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

export default class Trending extends Component {
    static navigationOptions = {
        title: 'Discover'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Discover!
                </Text>
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
    }
});
