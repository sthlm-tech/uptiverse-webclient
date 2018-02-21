import {
  checkStatus,
  parseJSON
} from "./../helpers/http";

export const SET_RECRUIT = 'SET_RECRUIT';
export const GET_RECRUIT_STARTED = 'GET_RECRUIT_STARTED';
export const GET_RECRUIT_FAILED = 'GET_RECRUIT_FAILED';
export const EDIT_RECRUIT = 'EDIT_RECRUIT';
export const SAVE_RECRUIT_STARTED = 'SAVE_RECRUIT_STARTED';
export const SAVE_RECRUIT_FAILED = 'SAVE_RECRUIT_FAILED';

export const setRecruit = input => dispatch => {
  dispatch({
    type: SET_RECRUIT,
    data: input
  });
};

export const edit = input => dispatch => {
  dispatch({
    type: EDIT_RECRUIT,
    editedProperty: input.property
  });
  dispatch(setRecruit(input.recruit));
};


export const getRecruit = id => dispatch => {
  dispatch({ type: GET_RECRUIT_STARTED });
  return fetch('https://api.uptiverse.se/api/recruits/' + id, { credentials: 'include' })
    .then(checkStatus)
    .then(parseJSON)
    .then(function(json) {
      dispatch(setRecruit(json));
    }).catch(function(ex) {
      console.log(ex)
      dispatch({ type: GET_RECRUIT_FAILED });
    });
};

export const save = input => dispatch => {
  dispatch({ type: SAVE_RECRUIT_STARTED });
  let body = JSON.stringify( input.data );
  return fetch('https://api.uptiverse.se/api/recruits/save', {
      credentials: 'include',
      method: "post",
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: body
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(function(recruit){
      dispatch(setRecruit(recruit));
    })
    .catch(function(ex) {
      dispatch({ type: SAVE_RECRUIT_FAILED });
    });
};
