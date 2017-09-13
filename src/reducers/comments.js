import {
  SET_COMMENTS,
  GET_COMMENTS_STARTED,
  GET_COMMENTS_FAILED
 } from '../actions/comments';

export default function comments(state = {}, action) {
  switch (action.type) {
    case GET_COMMENTS_STARTED:
      return {
        ...state,
        [action.key]: {comments: [], isLoading: true }
      };
      case GET_COMMENTS_FAILED:
        return {
          ...state,
          [action.key]: {comments: [], isLoading: false }
        };
    case SET_COMMENTS:
      return {
        ...state,
        [action.key]: {comments: action.comments, isLoading: false }
      };
    default:
      return state;
  }
}
