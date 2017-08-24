import React from 'react';
import Employees from './Employees';
import Details from './details';
import Edit from './edit';
import { getEmployee, setCanEditEmployee } from './../../actions/employee';
import { getEmployees } from './../../actions/employees';

export default {
  path: '/employees',
  children:[
    {
      path: '/',
      async action (context) {
        context.store.dispatch(getEmployees());
        return (<Employees />);
      }
    },
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
    }
  ]
};
