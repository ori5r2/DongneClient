import SidebarTemplate from '../../template/SidebarTemplate';

import { useState } from 'react';

import { Route, Switch, useLocation, useRouteMatch } from 'react-router-dom';
import GroupDetail from '../../components/GroupDetail';
import GroupCollection from '../../components/GroupsCollection';

const AdminAttendPage = () => {
  const match = useRouteMatch();
  return (
    <SidebarTemplate isAttendance={true}>
      <Switch>
        <Route path={match.path} component={GroupDetail} exact />
        <Route path={`${match.path}/:id`} component={GroupCollection} />
      </Switch>
    </SidebarTemplate>
  );
};

export default AdminAttendPage;
