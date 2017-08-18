import { combineReducers } from 'redux';
import user from './user';
import news from './news';
import employee from './employee';
import employees from './employees';

const reducers = combineReducers({
  user,
  news,
  employee,
  employees,
});

export default reducers
