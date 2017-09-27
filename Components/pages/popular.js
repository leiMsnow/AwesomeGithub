import React, {Component} from 'react';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

import LanguageDao, {FLAG_LANGUAGE} from "../dao/language";
import PopularTab from "./popular-tab";


export default class Popular extends Component {
    constructor(props) {
        super(props);
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.state = {
            languages: [],
        }
    }

    static navigationOptions = {

    };

    componentDidMount() {
        this._loadLanguage();
    }

    render() {
        return (
            <ScrollableTabView
                tabBarUnderlineColor={'#e7e7e7'}
                tabBarInactiveTextColor='mintcream'
                tabBarActiveTextColor='white'
                tabBarBackgroundColor='black'
                ref="scrollableTabView"
                initialPage={0}
                renderTabBar={() =>
                    <ScrollableTabBar style={{height: 40, borderWidth: 0, elevation: 2}}
                                      tabStyle={{height: 40}}
                                      underlineHeight={2}/>
                }>

                {
                    this.state.languages.map((result, index, arr) => {
                        let language = arr[index];
                        return language && language.checked ?
                            <PopularTab
                                key={index} {...this.props}
                                tabLabel={language.name}/> : null;
                    })
                }
            </ScrollableTabView>
        );
    }

    _loadLanguage = () => {
        this.languageDao.fetch()
            .then((languages) => {
                if (languages) {
                    this.setState({languages});
                }
            })
            .catch((error) => {
                console.log('_loadLanguage', 'load error: ' + error);
            });
    }
}