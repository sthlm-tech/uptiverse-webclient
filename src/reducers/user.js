import {
  SET_USER,
  SET_USER_IS_AUTHENTICATED,
  GET_AUTHENTICATED_USER_STARTED,
  GET_AUTHENTICATED_USER_FAILED
} from './../actions/user';

let initailState = {
  data: [],
  isLoading: false,
  error: null,
  isAuthenticated: false,
  lastCheck: null,
};

const user = (state = initailState, action) => {

  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        data: action.data,
        isLoading: false,
        lastCheck: Date.now()
      }
    case SET_USER_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      }
    case GET_AUTHENTICATED_USER_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case GET_AUTHENTICATED_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default user
