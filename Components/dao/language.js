import {
    AsyncStorage,
} from 'react-native';

import keysData from '../data/keys.json';
import langData from '../data/lang.json';

export let FLAG_LANGUAGE = {
    flag_language: 'language_dao_language',
    flag_key: 'language_dao_key',
};

export default class LanguageDao {
    constructor(flag) {
        this.flag = flag;
    }

    fetch() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(this.flag, (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }
                if (!result) {
                    let data = this.flag === FLAG_LANGUAGE.flag_language ? langData : keysData;
                    this.save(data);
                    resolve(data);
                } else {
                    try {
                        resolve(JSON.parse(result));
                    } catch (e) {
                        reject(error);
                    }
                }
            })
        })
    }

    save(data) {
        let string = JSON.stringify(data);
        AsyncStorage.setItem(this.flag, string, (error, result) => {
            if (error) {

            } else if (result) {

            }
        });
    }
}