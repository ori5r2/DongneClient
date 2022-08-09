import React from 'react';
import { Route } from 'react-router-dom';

//import page
import LoginLandingPage from './pages/LoginLandingPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import UserLoginPage from './pages/user/UserLoginPage';
import AdminMembersPage from './pages/admin/AdminMembersPage';

const App = () => {
  return (
    <>
      <Route component={LoginLandingPage} path="/" exact />
      <Route component={AdminLoginPage} path="/admin/login" />
      <Route component={UserLoginPage} path="/user/login" exact />
      <Route component={AdminMembersPage} path="/admin/members" />
    </>
  );
};

export default App;
