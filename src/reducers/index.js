import { combineReducers } from 'redux';
import menus from './menus';
import user from './user';
import news from './news';
import comments from './comments';
import employee from './employee';
import employees from './employees';
import recruit from './recruits/recruit';
import recruits from './recruits/recruits';
import notifications from './notifications';

const reducers = combineReducers({
  menus,
  user,
  news,
  comments,
  employee,
  employees,
  recruit,
  recruits,
  notifications,
});

export default reducers
