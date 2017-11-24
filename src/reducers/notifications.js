import {
  SET_NOTIFICATIONS,
} from '../actions/notifications';

 let initialState = {
   toggled: false,
   data: []
 };

 export default function news(state = initialState, action) {
   switch (action.type) {
     case SET_NOTIFICATIONS:
       return {
         ...state,
         data: action.notifications,
       };
     default:
       return state;
   }
 }
