import HomePageTemplate from '../../template/HomePageTemplate';
import HomeSideBarTemplate from '../../template/HomeSideBarTemplate';
import SidebarTemplate from '../../template/SidebarTemplate';

const AdminAttendPage = () => {
  return (
    <SidebarTemplate isAttendance={true}>
      <button onClick={() => console.log('hello world')}>Hello</button>
    </SidebarTemplate>
  );
};

export default AdminAttendPage;
