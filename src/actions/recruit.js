import {
  checkStatus,
  parseJSON
} from "./../helpers/http";

export const SET_RECRUIT = 'SET_RECRUIT';
export const GET_RECRUIT_STARTED = 'GET_RECRUIT_STARTED';
export const GET_RECRUIT_FAILED = 'GET_RECRUIT_FAILED';

export const setRecruit = input => dispatch => {
  dispatch({
    type: SET_RECRUIT,
    data: input
  });
};

export const getRecruit = id => dispatch => {
  dispatch({ type: GET_RECRUIT_STARTED });
  return fetch('http://api.uptiverse.se/api/recruits/' + id, { credentials: 'include' })
    .then(checkStatus)
    .then(parseJSON)
    .then(function(json) {
      dispatch(setRecruit(json));
    }).catch(function(ex) {
      console.log(ex)
      dispatch({ type: GET_RECRUIT_FAILED });
    });
};
