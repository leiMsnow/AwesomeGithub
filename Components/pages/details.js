import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

export default class Details extends Component {
    static navigationOptions = ({navigation}) => {
        const {state, setParams} = navigation;
        const isMore = state.params.mode === 'more';
        const {user} = state.params;
        return {
            title: !isMore ? 'Details' : `More about ${user}`,
            headerRight: (<Button title={!isMore ? 'more' : 'done'}
                                  onPress={() => setParams({
                                      mode: isMore ? 'none' : 'more'
                                  })}/>),
            headerStyle: {paddingRight: 10},
        };
    };

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Hello， {params.user}
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
