import React from 'react';
import Pages from './Pages';
import Important from './Important';

export default {
  path: '/pages',
  children:[
    {
      path: '/',
      async action (context) {
        return (<Pages />);
      }
    },
    {
      path: '/important',
      async action (context) {
        return (<Important />);
      }
    }
  ]
};
