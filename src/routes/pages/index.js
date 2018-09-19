import React from 'react';
import Pages from './Pages';
import Important from './Important';
import Welcome from './Welcome';
import Uptiverse from './Uptiverse';
import { getImportant } from './../../actions/pages';

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
        context.store.dispatch(getImportant());
        return (<Important />);
      }
    },
    {
      path: '/welcome',
      async action (context) {
        return (<Welcome />);
      }
    },
    {
      path: '/uptiverse',
      async action (context) {
        return (<Uptiverse />);
      }
    }
  ]
};
