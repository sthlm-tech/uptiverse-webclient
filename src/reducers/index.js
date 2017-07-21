import { combineReducers } from 'redux';
import user from './user';
import news from './news';

const reducers = combineReducers({
  user,
  news,
});

export default reducers
