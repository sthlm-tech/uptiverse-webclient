import {
  checkStatus,
  parseJSON
} from "./../helpers/http";

export const SET_EMPLOYEE = 'SET_EMPLOYEE';
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';
export const GET_EMPLOYEE_STARTED = 'GET_EMPLOYEE_STARTED';
export const GET_EMPLOYEE_FAILED = 'GET_EMPLOYEE_FAILED';
export const SET_CAN_EDIT_EMPLOYEE = 'SET_CAN_EDIT_EMPLOYEE';
export const SAVE_EMPLOYEE_STARTED = 'SAVE_EMPLOYEE_STARTED';
export const SAVE_EMPLOYEE_FAILED = 'SAVE_EMPLOYEE_FAILED';

export const setEmployee = (employee) => ({
  type: SET_EMPLOYEE,
  data: employee,
});

export const editEmployee = input => dispatch => {
  dispatch({
    type: EDIT_EMPLOYEE,
    editedProperty: input.property
  });
  dispatch(setEmployee(input.employee));
};

export const setCanEditEmployee = (user, employee) => ({
  type: SET_CAN_EDIT_EMPLOYEE,
  canEdit: user.username === employee.username
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

export const saveEmployee = input => dispatch => {
  dispatch({ type: SAVE_EMPLOYEE_STARTED });
  let body = JSON.stringify( input.data );
  return fetch('http://api.uptiverse.se/api/employees/save', {
      credentials: 'include',
      method: "post",
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: body
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(function(employee){
      dispatch(setEmployee(employee));
    })
    .catch(function(ex) {
      dispatch({ type: SAVE_EMPLOYEE_FAILED });
    });
};
