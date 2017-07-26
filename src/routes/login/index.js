import "./login.css";
import React from 'react';
import Login from './Login';

export default {
  path: '/login',
  action () {
    return {
      component: <Login />
    };
  }
};
