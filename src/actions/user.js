import {
  checkStatus,
  parseJSON
} from "./../helpers/http";

export const SET_USER = 'SET_USER';
export const SET_USER_IS_AUTHENTICATED = 'SET_USER_IS_AUTHENTICATED';
export const GET_AUTHENTICATED_USER_STARTED = 'GET_AUTHENTICATED_USER_STARTED';
export const GET_AUTHENTICATED_USER_FAILED = 'GET_AUTHENTICATED_USER_FAILED';

export const setUser = (user) => {
  return {
    type: SET_USER,
    data: user
  }
}

export const setUserIsAuthenticated = (isAuthenticated) => {
  return {
    type: SET_USER_IS_AUTHENTICATED,
    isAuthenticated: isAuthenticated
  }
}

export const getAuthenticatedUser = input => dispatch => {
  dispatch({ type: GET_AUTHENTICATED_USER_STARTED });
  return fetch('http://localhost:5000/authentication/validation/user', {credentials: 'include'})
    .then(checkStatus)
    .then(parseJSON)
    .then(function(json) {
      dispatch(setUser(json));
      dispatch(setUserIsAuthenticated(true));
    }).catch(function(ex) {
      dispatch({ type: GET_AUTHENTICATED_USER_FAILED });
    });
};
