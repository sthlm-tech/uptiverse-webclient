import React from 'react';
import Recruits from './Recruits';
import Details from './details';
import { getRecruit } from './../../actions/recruit';
import { findRecruits, setRecruits } from './../../actions/recruits';
export default {
  path: '/recruits',
  children: [
    {
      path: '/',
      async action (context) {
        return (<Recruits />);
      }
    },
    {
      path: '/search',
      children:[
        {
          path: '/',
          async action (context) {
            context.store.dispatch(setRecruits({}));
            return (<Recruits query=""/>);
          }
        },
        {
          path: '/:query',
          async action (context) {
            var query = encodeURIComponent(context.params.query);
            context.store.dispatch(findRecruits({query:query}));
            return (<Recruits query={context.params.query}/>);
          }
        }
      ]
    },
    {
      path: '/:id',
      async action (context) {
        context.store.dispatch(getRecruit(context.params.id));
        return (<Details />);
      }
    },
    /*,
    {
      path: '/:id',
      async action (context) {
        context.store.dispatch(getEmployee({
          id: context.params.id,
          callback: function(employee){
            context.store.dispatch(setCanEditEmployee(context.store.getState().user.data, employee));
          }
        }));
      },
      children:[
        {
          path:"/",
          async action (context) {
            return (<Details />);
          }
        },
        {
          path:"/edit",
          async action (context) {
            return (<Edit />);
          }
        }
      ]
    }*/
  ]
};
