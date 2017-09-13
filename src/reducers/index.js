import { combineReducers } from 'redux';
import user from './user';
import news from './news';
import employee from './employee';
import employees from './employees';
import recruits from './recruits/recruits';

const reducers = combineReducers({
  user,
  news,
  employee,
  employees,
  recruits,
});

export default reducers
