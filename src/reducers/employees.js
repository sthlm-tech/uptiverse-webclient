import {
  SET_EMPLOYEES,
  GET_EMPLOYEES_STARTED,
  GET_EMPLOYEES_FAILED
} from './../actions/employees';

let initialState = {
  data: [],
  isLoading: false,
  error: null
};

export default function news(state = initialState, action) {
  switch (action.type) {
    case SET_EMPLOYEES:
      return {
        data: action.data,
        isLoading: false,
        error: null
      };
    case GET_EMPLOYEES_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case GET_EMPLOYEES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: "Failed to load employees"
      };
    default:
      return state;
  }
}
