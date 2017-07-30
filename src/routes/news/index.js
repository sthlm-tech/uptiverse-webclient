import React from 'react';
import News from './News';
import Create from './create';
import { getNews } from './../../actions/news';

export default {
  path: '/news',
  children:[
    {
      path: '/',
      async action (context) {
        context.store.dispatch(getNews());
        return {
          menu:{
            name:"News",
            icon:"newspaper-o",
          },
          component: (<News />)
        };
      }
    },
    {
      path: '/create',
      async action (context) {
        return {
          component: (<Create />)
        };
      }
    }
  ]
};
