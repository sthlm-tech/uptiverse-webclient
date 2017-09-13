import {
  SET_RECRUIT,
  GET_RECRUIT_STARTED,
  GET_RECRUIT_FAILED
} from './../../actions/recruit';

let initialState = {
  data: [],
  isLoading: false,
  error: null
};

export default function news(state = initialState, action) {
  switch (action.type) {
    case SET_RECRUIT:
      return {
        ...state,
        data: action.data,
        isLoading: false,
        error: null
      };
    case GET_RECRUIT_STARTED:
      return {
        ...state,
        data: null,
        isLoading: true
      };
    case GET_RECRUIT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: "Failed to load recruit"
      };
    default:
      return state;
  }
}
