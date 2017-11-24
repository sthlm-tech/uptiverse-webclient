import {
  SET_MENU_OPEN,
  SET_MENU_CLOSE,
} from '../actions/menu';

 let initialState = {
   current: null,
   isOpen: false
 };

 export default function news(state = initialState, action) {
   switch (action.type) {
     case SET_MENU_OPEN:
       return {
         isOpen: true,
         current: action.menu
       };
     case SET_MENU_CLOSE:
       return {
         ...state,
         isOpen: false,
         current: null
       };
     default:
       return state;
   }
 }
