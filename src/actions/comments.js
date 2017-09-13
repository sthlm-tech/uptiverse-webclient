import {
  checkStatus,
  parseJSON
} from "./../helpers/http";

export const SET_COMMENTS = 'SET_COMMENTS';
export const GET_COMMENTS_STARTED = 'GET_COMMENTS_STARTED';
export const GET_COMMENTS_FAILED = 'GET_COMMENTS_FAILED';


export const setComments = (key, comments) => ({
  type: SET_COMMENTS,
  key,
  comments
});

export const getComments = (key) => dispatch => {
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

/*
export const addComment = input => dispatch => {
  var service = input.services.comments;
  request
  .post(service.url + "/" + input.key)
  .send({comment: input.comment})
  .set('Authorization', "JWT " + service.token)
  .set('Content-Type', "application/json;charset=UTF-8")
  .end(function(err, res){
    dispatch(getComments(input));
  });
};*/
