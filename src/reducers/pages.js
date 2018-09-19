import {
    SET_IMPORTANT,
    GET_IMPORTANT_STARTED,
    GET_IMPORTANT_FAILED
} from './../actions/pages';
  
let initialState = {
    important: [],
    isLoading: false,
    isSaving: false,
    error: null
};
  
export default function pages(state = initialState, action) {
    switch (action.type) {
        case SET_IMPORTANT:
            return {
                important: action.data,
                isLoading: false,
                error: null
            };
        case GET_IMPORTANT_STARTED:
            return {
                ...state,
                isLoading: true
            };
        case GET_IMPORTANT_FAILED:
            return {
                ...state,
                isLoading: false,
                error: "Failed to load important information"
            };
        default:
            return state;
    }
}
  