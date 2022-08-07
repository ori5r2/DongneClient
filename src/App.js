import React from 'react';
import { Route } from 'react-router-dom';

//import page
import LoginLandingPage from './pages/LoginLandingPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import UserLoginPage from './pages/user/UserLoginPage';
import AdminRegisterPage from './pages/admin/AdminRegisterPage';
import AdminRegisterCheck1 from './pages/admin/AdminRegisterCheck1';

const App = () => {
  return (
    <>
      <Route component={LoginLandingPage} path="/" exact />
      <Route component={AdminLoginPage} path="/admin/login" />
      <Route component={UserLoginPage} path="/user/login" exact />
      <Route component={AdminRegisterPage} path="/admin/register" />
      <Route component={AdminRegisterCheck1} path="/admin/register/check1" />
    </>
  );
};

export default App;
