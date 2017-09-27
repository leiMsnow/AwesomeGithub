import React, {Component} from 'react';
import {
    FlatList,
    View,
    StyleSheet,
    Text,
} from 'react-native';
import * as GlobalStyles from "../utils/global-styles";
import DataRepository, {FLAG_STORAGE} from "../dao/data-repository";
import Api from '../utils/api';
import RepositoryCell from "../common/repository-cell";

let dataRepository = new DataRepository(FLAG_STORAGE.flag_popular);

export default class PopularTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isLoadingFail: false,
            favoriteKeys: [],
            dataSource: [],
            filter: '',
        };
    }

    componentDidMount() {
        this._loadData();
    }

    render() {
        let content = <FlatList
            data={this.state.dataSource}
            renderItem={({item}) =>
                <RepositoryCell
                    key={item.id}
                    popularModel={item}
                />
            }
        />;

        return (
            <View style={[GlobalStyles.listContainer, {paddingTop: 0}]}>
                {content}
            </View>
        );
    }


    _loadData = () => {
        this._updateState({
            isLoading: true,
            isLoadingFail: false,
        });
        let url = this._getFetChUrl(this.props.tabLabel);
        dataRepository.fetchRepository(url)
            .then((warpData) => {
                this.items = warpData && warpData.items ? warpData.items : warpData ? warpData : [];
                if (warpData && warpData.date && !dataRepository.checkDate(warpData.date)) {
                    dataRepository.fetchNetRepository(url);
                }
                this._getFavoriteKeys();
            })
            .then((items) => {
                if (!items || items.length === 0) return;
                this.items = items;
                console.log('_loadData', this.items);
                this._getFavoriteKeys();
            })
            .catch((error) => {
                console.log('_loadData', 'error：' + error);
                this._updateState({
                    isLoading: false,
                    isLoadingFail: true,
                })
            })
    };

    _getFavoriteKeys = () => {
        this._flushFavoriteState();
    };

    _flushFavoriteState = () => {
        this._updateState({
            isLoading: false,
            isLoadingFail: false,
            dataSource: this.items,
        })
    };

    _getFetChUrl = (category) => {
        return Api.URL + category + Api.QUERY_STR;
    };

    _updateState = (states) => {
        if (!states) return;
        this.setState(states);
    };
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});