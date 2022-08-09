import React from 'react';
import { Route } from 'react-router-dom';

//import page
import LoginLandingPage from './pages/LoginLandingPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import UserLoginPage from './pages/user/UserLoginPage';
import AdminRegisterPage from './pages/RegisterSelectPage';
import AdminRegisterCheck1 from './pages/admin/AdminRegisterCheck1';
import UserRegisterCheck1 from './pages/user/UserRegisterCheck1';

const App = () => {
  return (
    <>
      <Route component={LoginLandingPage} path="/" exact />
      <Route component={AdminLoginPage} path="/admin/login" />
      <Route component={UserLoginPage} path="/user/login" exact />
      <Route component={AdminRegisterPage} path="/admin/register" exact />
      <Route component={AdminRegisterCheck1} path="/admin/register/check1" />
      <Route component={UserRegisterCheck1} path="/user/register/check1" />
    </>
  );
};

export default App;
