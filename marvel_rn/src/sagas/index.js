//import {delay} from "redux-saga/effects";
import {
    takeEvery,
    takeLatest,
    put,
    call,
    all
} from "redux-saga/effects";
import {
    callApi
} from '../services/api';

function* getCharacters(info) {
    try {
        let response = yield call(callApi, {
            endpoint: '/characters',
            method: 'GET',
        }, {
            limit: 20,
            offset: info.page * 20
        });

        if (response.status === 200) {
            let {
                data
            } = response.data;

            let resultsCharacters = data.results;

            yield put({
                type: "SET_CHARACTERS",
                payload: resultsCharacters
            });
        }
    } catch (error) {
        console.log('Erro do GET: ', error)
    }
}

function* openModal(info) {
    yield put({
        type: "SET_MODAL_OPENED",
        payload: {
            opened: true,
            character: info.character
        }
    })
}

function* closeModal() {
    yield put({
        type: "SET_MODAL_OPENED",
        payload: {
            opened: false,
            character: null
        }
    })
}

export default function* root() {
    yield all([
        takeEvery(`GET_CHARACTERS_TRIGGER`, getCharacters),
        takeEvery(`OPEN_MODAL_TRIGGER`, openModal),
        takeEvery(`CLOSE_MODAL_TRIGGER`, closeModal)
    ]);
}