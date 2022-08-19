import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import page
import LoginLandingPage from './pages/LoginLandingPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import UserLoginPage from './pages/user/UserLoginPage';
import AdminRegisterPage from './pages/RegisterSelectPage';
import AdminRegisterCheck1 from './pages/admin/AdminRegisterCheck1';
import AdminRegisterCheck2 from './pages/admin/AdminRegisterCheck2';
import AdminRegisterCheck3 from './pages/admin/AdminRegisterCheck3';
import UserRegisterCheck1 from './pages/user/UserRegisterCheck1';
import UserRegisterCheck2 from './pages/user/UserRegisterCheck2';
import UserRegisterCheck3 from './pages/user/UserRegisterCheck3';
import AdminHomePage from './pages/admin/AdminHomePage';
import AdminAttendPage from './pages/admin/AdminAttendPage';
import AdminMembersPage from './pages/admin/AdminMembersPage';
import UserMainPage from './pages/user/UserMainPage';
import UserMyPage from './pages/user/UserMyPage';
const App = () => {
  return (
    <Switch>
      <Route component={LoginLandingPage} path="/" exact />
      <Route component={AdminLoginPage} path="/admin/login" exact />
      <Route component={AdminHomePage} path="/admin/home" exact />
      <Route component={AdminAttendPage} path="/admin/attendance" />
      <Route component={UserLoginPage} path="/user/login" exact />
      <Route component={AdminRegisterPage} path="/admin/register" exact />
      <Route
        component={AdminRegisterCheck1}
        path="/admin/register/check1"
        exact
      />
      <Route
        component={AdminRegisterCheck2}
        path="/admin/register/check2"
        exact
      />
      <Route
        component={AdminRegisterCheck3}
        path="/admin/register/check3"
        exact
      />
      <Route
        component={UserRegisterCheck1}
        path="/user/register/check1"
        exact
      />
      <Route
        component={UserRegisterCheck2}
        path="/user/register/check2"
        exact
      />
      <Route
        component={UserRegisterCheck3}
        path="/user/register/check3"
        exact
      />
      <Route component={AdminMembersPage} path="/admin/members" exact />
      <Route component={UserMainPage} path="/user/usermain" exact />
      <Route component={UserMyPage} path="/user/mypage" exact />
    </Switch>
  );
};

export default App;
