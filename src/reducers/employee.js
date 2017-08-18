import {
  SET_EMPLOYEE,
  GET_EMPLOYEE_STARTED,
  GET_EMPLOYEE_FAILED,
  SET_CAN_EDIT_EMPLOYEE
} from './../actions/employee';

let initialState = {
  data: [],
  isLoading: false,
  canEdit: false,
  error: null
};

export default function news(state = initialState, action) {
  switch (action.type) {
    case SET_EMPLOYEE:
      return {
        ...state,
        data: action.data,
        isLoading: false,
        error: null
      };
    case GET_EMPLOYEE_STARTED:
      return {
        ...state,
        data: null,
        isLoading: true
      };
    case GET_EMPLOYEE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: "Failed to load employee"
      };
    case SET_CAN_EDIT_EMPLOYEE:
      return {
        ...state,
        canEdit: action.canEdit
      };
    default:
      return state;
  }
}
