import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';

import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

import PopularScreen from './popular';
import TrendingScreen from './trending';
import FavoriteScreen from './favorite';
import UserScreen from './user';

import DetailsScreen from './details';


export default class App extends Component {

    render() {
        return <MyNavigator/>
    }
}

const MainNavigator = TabNavigator({
        Popular: {
            screen: PopularScreen,
            navigationOptions: {
                headerTitle: 'Popular',
                tabBarIcon: ({tintColor}) => (
                    _renderIcon(require('../images/ic_popular.png'), tintColor)
                ),
            }
        },
        Trending: {
            screen: TrendingScreen,
            navigationOptions: {
                headerTitle: 'Trending',
                tabBarIcon: ({tintColor}) => (
                    _renderIcon(require('../images/ic_trending.png'), tintColor)
                ),
            }
        },
        Favorite: {
            screen: FavoriteScreen,
            navigationOptions: {
                headerTitle: 'Favorite',
                tabBarIcon: ({tintColor}) => (
                    _renderIcon(require('../images/ic_favorite.png'), tintColor)
                ),
            }
        },
        User: {
            screen: UserScreen,
            navigationOptions: {
                headerTitle: 'User',
                tabBarIcon: ({tintColor}) => (
                    _renderIcon(require('../images/ic_my.png'), tintColor)
                ),
            }
        },
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'black'
            },
            headerTitleStyle: {
                color: 'white',
            }
        },
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'lime',
            indicatorStyle: {height: 0},
            showIcon: true,
            labelStyle: {
                fontSize: 10,
            },
            style: {
                backgroundColor: 'black',
            }
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
        Home: {
            screen: MainNavigator,
        },
        Details: {screen: DetailsScreen},
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'black'
            },
            headerTitleStyle: {
                color: 'white',
            }
        }

    });


const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    }
});