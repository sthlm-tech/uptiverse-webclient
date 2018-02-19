import {
  SET_MENU_CONTENT,
  SET_MENU_OPEN,
  SET_MENU_CLOSE,
} from '../actions/menu';

 let initialState = {
   content: [],
   current: null,
   isOpen: false
 };

 export default function news(state = initialState, action) {
   switch (action.type) {
     case SET_MENU_CONTENT:
       return {
         ...state,
         content: action.content
       };
     case SET_MENU_OPEN:
       return {
         ...state,
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
