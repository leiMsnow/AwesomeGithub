import React, {Component} from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native'
import HTMLView from 'react-native-htmlview';

import GlobalStyles from '../utils/global-styles';

export default class RepositoryCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popularModel: this.props.popularModel,
            favoriteIcon: require('../images/ic_unstar.png')
        }
    }

    render() {
        let item = this.state.popularModel;
        let description = '<p>' + item.description + '</p>';
        let favoriteButton = <TouchableHighlight
            style={{padding: 6}}
            underlayColor='transparent'>
            <Image
                ref='favoriteIcon'
                style={[{width: 22, height: 22,}]}
                source={this.state.favoriteIcon}/>
        </TouchableHighlight>;
        return (
            <TouchableHighlight>
                <View style={GlobalStyles.cell_container}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.title}>
                            {item.name}
                        </Text>
                    </View>
                    <HTMLView
                        value={description}
                        stylesheet={{
                            p: styles.description,
                            a: styles.description,
                        }}
                    />
                    <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.author}>Author: </Text>
                            <Image
                                style={{width: 22, height: 22,}}
                                source={{uri: item.owner.avatar_url}}
                            />
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.author}>Stars: </Text>
                            <Text style={styles.author}>
                                {item.stargazers_count}
                            </Text>
                        </View>
                        {favoriteButton}
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        marginBottom: 2,
        color: '#212121',
        flex: 1
    },
    description: {
        fontSize: 14,
        marginBottom: 2,
        color: '#757575'
    },
    author: {
        fontSize: 14,
        marginBottom: 2,
        color: '#757575'
    },
});
