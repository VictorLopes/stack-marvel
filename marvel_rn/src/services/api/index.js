import axios from 'axios'
import config from './config'
export const callApi = (call, callParams) => {
    let {
        endpoint,
        method = 'GET',
        params = {
            ...callParams,
            ts: 1,
            apikey: config.api_key,
            hash: config.hash
        },
        data = {},
        headers = {},
        showJSON = false
    } = call
    let url = config.url + endpoint
    let defaultHeaders = {
        'Content-Type': 'application/json'
    };
    headers = Object.assign({}, defaultHeaders, headers);
    if (showJSON) console.log('[CALL API JSON data]', JSON.stringify(data));
    if (method === 'GET') {
        return axios(url, {
            params,
            headers,
            method
        })
    } else {
        return axios(url, {
            headers,
            method,
            params,
            data
        });
    }
}