import React from 'react';
import News from './News';
import { getNews } from './../../actions/news';

export default {
  path: '/news',
  async action (context) {
    context.store.dispatch(getNews());
    return (<News />);
  }
};