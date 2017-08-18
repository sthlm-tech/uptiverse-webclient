import React from 'react';
import Employees from './Employees';
import Details from './details';
import { getEmployee, setCanEditEmployee } from './../../actions/employee';
import { getEmployees } from './../../actions/employees';

export default {
  path: '/employees',
  children:[
    {
      path: '/',
      async action (context) {
        context.store.dispatch(getEmployees());
        return {
          menu:{
            name:"Employees",
            icon:"users",
          },
          component: (<Employees />)
        };
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
        return {
          component: (<Details />)
        };
      }
    }
  ]
};
