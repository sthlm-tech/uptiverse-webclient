import {
  checkStatus,
  parseJSON
} from "./../helpers/http";

export const SET_EMPLOYEES = 'SET_EMPLOYEES';
export const GET_EMPLOYEES_STARTED = 'GET_EMPLOYEES_STARTED';
export const GET_EMPLOYEES_FAILED = 'GET_EMPLOYEES_FAILED';

export const setEmployees = (employees) => ({
  type: SET_EMPLOYEES,
  data: employees,
});

export const getEmployees = input => dispatch => {
  dispatch({ type: GET_EMPLOYEES_STARTED });
  return fetch('https://api.uptiverse.se/api/employees', { credentials: 'include' })
    .then(checkStatus)
    .then(parseJSON)
    .then(function(json) {
      dispatch(setEmployees(json));
    }).catch(function(ex) {
      console.log(ex)
      dispatch({ type: GET_EMPLOYEES_FAILED });
    });
};
