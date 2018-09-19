import {
    checkStatus,
    parseJSON
} from "./../helpers/http";

export const SET_IMPORTANT = 'SET_IMPORTANT';
export const GET_IMPORTANT_STARTED = 'GET_IMPORTANT_STARTED';
export const GET_IMPORTANT_FAILED = 'GET_IMPORTANT_FAILED';

export const setImportant = (important) => {
    return {
        type: SET_IMPORTANT,
        data: important
    }
}

export const getImportant = input => dispatch => {
    dispatch({ type: GET_IMPORTANT_STARTED });
    return fetch('https://api.uptiverse.se/api/pages/important', { credentials: 'include' })
        .then(checkStatus)
        .then(parseJSON)
        .then(function(json) {
            dispatch(setImportant(json));
        }).catch(function(ex) {
            dispatch({ type: GET_IMPORTANT_STARTED });
        });
};