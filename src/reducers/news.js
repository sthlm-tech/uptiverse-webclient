import {
  SET_NEWS,
  GET_NEWS_STARTED,
  GET_NEWS_FAILED,
  SAVE_NEWS_STARTED,
  SAVE_NEWS_FAILED
} from './../actions/news';

let initialState = {
  data: [],
  isLoading: false,
  isSaving: false,
  error: null
};

export default function news(state = initialState, action) {
  switch (action.type) {
    case SET_NEWS:
      return {
        data: action.data,
        isLoading: false,
        error: null
      };
    case GET_NEWS_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case GET_NEWS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: "Failed to load news"
      };
    case SAVE_NEWS_STARTED:
      return {
        ...state,
        isSaving: true
      };
    case SAVE_NEWS_FAILED:
      return {
        ...state,
        isSaving: false,
        error: "Failed to save news"
      };
    default:
      return state;
  }
}
