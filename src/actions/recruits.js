import {
  checkStatus,
  parseJSON
} from "./../helpers/http";

export const SET_RECRUITS = 'SET_RECRUITS';
export const FIND_RECRUITS_STARTED = 'FIND_RECRUITS_STARTED';
export const FIND_RECRUITS_FAILED = 'FIND_RECRUITS_FAILED';

export const setRecruits = input => dispatch => {
  dispatch({
    type: SET_RECRUITS,
    data: input.data || [],
    source: input.source
  });
};

export const findRecruits = input => dispatch => {
  dispatch({ type: FIND_RECRUITS_STARTED });
  return fetch('http://api.uptiverse.se/api/recruits/search/' + input.query, { credentials: 'include' })
    .then(checkStatus)
    .then(parseJSON)
    .then(function(json) {
      dispatch(setRecruits({data: json.recruits, source: json.source}));
      if(input && typeof(input.callback) === 'function'){ input.callback(json);}
    }).catch(function(ex) {
      console.log(ex)
      dispatch({ type: FIND_RECRUITS_FAILED });
    });
};
