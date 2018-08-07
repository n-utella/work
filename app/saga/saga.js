import { put, call, spawn } from 'redux-saga/effects';

import { init } from '../actions/index.js';

const url = 'http://country.io/';

let target = '';

function fetchData() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = url + target + '.json';

    return fetch(proxyUrl + targetUrl)
        .then(res => { return res.json(); });
}

function *watchState() {
    const db = [];
    try {
        const data = {};
        const column = ['continent', 'names', 'capital', 'phone'];
        for (let i = 0; i < column.length; ++i) {
            const col = column[i];
            console.log(col);
            target = col;
            const res = yield call(fetchData);
            console.log(res);
            for (const code in res) {
                if (res.hasOwnProperty(code)) {
                    if (!data.hasOwnProperty(code)) {
                        data[code] = {};
                    }
                    data[code][col] = res[code];
                }
            }
        }
        for (const code in data) {
            if (data.hasOwnProperty(code)) {
                const flat = data[code];
                flat.code = code;
                db.push(flat);
            }
        }
        console.log(db);
    } catch(error) {
        console.log(error);
    }
    yield put(init(db));
}

function *initSaga() {
    yield spawn(watchState);
}

export default function *saga() {
    switch(window.location.pathname) {
        case '/':
            yield spawn(initSaga);
            break;
        default:
            break;
    }
}

