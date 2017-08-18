import {
  checkStatus,
  parseJSON
} from "./../helpers/http";

export const SET_EMPLOYEE = 'SET_EMPLOYEE';
export const GET_EMPLOYEE_STARTED = 'GET_EMPLOYEE_STARTED';
export const GET_EMPLOYEE_FAILED = 'GET_EMPLOYEE_FAILED';
export const SET_CAN_EDIT_EMPLOYEE = 'SET_CAN_EDIT_EMPLOYEE';

export const setEmployee = (employee) => ({
  type: SET_EMPLOYEE,
  data: employee,
});

export const getEmployee = input => dispatch => {
  dispatch({ type: GET_EMPLOYEE_STARTED });
  return fetch('http://api.uptiverse.se/api/employees/' + input.id, { credentials: 'include' })
    .then(checkStatus)
    .then(parseJSON)
    .then(function(json) {
      dispatch(setEmployee(json));
      if(input && typeof(input.callback) === 'function'){ input.callback(json);}
    }).catch(function(ex) {
      console.log(ex)
      dispatch({ type: GET_EMPLOYEE_FAILED });
    });
};

export const setCanEditEmployee = (user, employee) => ({
  type: SET_CAN_EDIT_EMPLOYEE,
  canEdit: user.username === employee.username
});
