import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';

import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

import HomeScreen from './home';
import DiscoverScreen from './discover';
import UserScreen from './user';
import DetailsScreen from './details';

export default class App extends Component {
    render() {
        return <MyNavigator/>
    }
}

const MainNavigator = TabNavigator({
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({tintColor}) => (
                    _renderIcon(require('../images/ic_home.png'), tintColor)
                ),
            }

        },
        Discover: {
            screen: DiscoverScreen,
            navigationOptions: {
                tabBarLabel: '发现',
                tabBarIcon: ({tintColor}) => (
                    _renderIcon(require('../images/ic_discover.png'), tintColor)
                ),
            }
        },
        User: {
            screen: UserScreen,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({tintColor}) => (
                    _renderIcon(require('../images/ic_user.png'), tintColor)
                ),
            }
        },
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            indicatorStyle: {height: 0},
            showIcon: true,
        }

    });

_renderIcon = (icon, tintColor) => {
    return (
        <Image
            source={icon}
            style={[styles.icon, {tintColor: tintColor}]}
        />
    );
};

const MyNavigator = StackNavigator({
    Home: {screen: MainNavigator},
    Details: {screen: DetailsScreen},
});

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    }
});