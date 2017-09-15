import {
  checkStatus,
  parseJSON
} from "./../helpers/http";

import { store } from "./../store";

export const SET_COMMENTS = 'SET_COMMENTS';
export const GET_COMMENTS_STARTED = 'GET_COMMENTS_STARTED';
export const GET_COMMENTS_FAILED = 'GET_COMMENTS_FAILED';

export const ADD_COMMENTS = 'ADD_COMMENTS';
export const ADD_COMMENTS_STARTED = 'ADD_COMMENTS_STARTED';
export const ADD_COMMENTS_FAILED = 'ADD_COMMENTS_FAILED';


export const setComments = (key, comments) => ({
  type: SET_COMMENTS,
  key,
  comments
});

export const getComments = (key) => dispatch => {
  if(store.getState().comments[key] && store.getState().comments[key].isLoading){ return; }
  dispatch({ type: GET_COMMENTS_STARTED, key: key });
  return fetch('http://api.uptiverse.se/api/comments/' + key, { credentials: 'include' })
    .then(checkStatus)
    .then(parseJSON)
    .then(function(json) {
      dispatch(setComments(key, json))
    }).catch(function(ex) {
      console.log(ex)
      dispatch({ type: GET_COMMENTS_FAILED, key: key });
    });

};


export const addComment = input => dispatch => {
  dispatch({ type: ADD_COMMENTS_STARTED });
  let body = JSON.stringify( {comment: input.comment} );
  return fetch('http://api.uptiverse.se/api/comments/' + input.key, {
      credentials: 'include',
      method: "post",
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: body
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(function(comment){
      dispatch(getComments(input.key));
    })
    .catch(function(ex) {
      dispatch({ type: ADD_COMMENTS_FAILED });
    });
};
