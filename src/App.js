import React from 'react';
import { Route } from 'react-router-dom';

//import page
import LoginLandingPage from './pages/LoginLandingPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import UserLoginPage from './pages/user/UserLoginPage';
import AdminHomePage from './pages/admin/AdminHomePage';

const App = () => {
  return (
    <>
      <Route component={LoginLandingPage} path="/" exact />
      <Route component={AdminLoginPage} path="/admin/login" />
      <Route component={AdminHomePage} path="/admin/home" exact />
      <Route component={UserLoginPage} path="/user/login" exact />
    </>
  );
};

export default App;
