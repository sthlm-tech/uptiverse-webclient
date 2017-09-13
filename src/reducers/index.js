import { combineReducers } from 'redux';
import user from './user';
import news from './news';
import comments from './comments';
import employee from './employee';
import employees from './employees';
import recruit from './recruits/recruit';
import recruits from './recruits/recruits';

const reducers = combineReducers({
  user,
  news,
  comments,
  employee,
  employees,
  recruit,
  recruits,
});

export default reducers
