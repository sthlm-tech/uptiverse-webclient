import React from 'react';
import Recruits from './Recruits';
import Details from './details';
import { getRecruit } from './../../actions/recruit';
import { findRecruits, setRecruits } from './../../actions/recruits';
import { getComments } from './../../actions/comments';
import { getCommentKey } from './../../helpers/referenceIdHelper';

export default {
  path: '/recruits',
  children: [
    {
      path: '/',
      async action (context) {
        return (<Recruits query=""/>);
      }
    },
    {
      path: '/search',
      children:[
        {
          path: '/',
          async action (context) {
            context.store.dispatch(findRecruits({query:""}));
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
        context.store.dispatch(getComments(getCommentKey(context.params.id)));
        return (<Details id={context.params.id}/>);
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
