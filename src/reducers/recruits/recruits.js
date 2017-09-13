import {
  SET_RECRUITS,
  FIND_RECRUITS_STARTED,
  FIND_RECRUITS_FAILED
} from './../../actions/recruits';

let initialState = {
  data: [],
  source: null,
  isLoading: false,
  error: null
};

export default function news(state = initialState, action) {
  switch (action.type) {
    case SET_RECRUITS:
      return {
        data: action.data,
        source: action.source,
        isLoading: false,
        error: null
      };
    case FIND_RECRUITS_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case FIND_RECRUITS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: "Failed to load recruits"
      };
    default:
      return state;
  }
}
