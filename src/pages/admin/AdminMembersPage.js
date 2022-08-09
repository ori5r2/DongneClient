import React from 'react';
import MemberCard from '../../components/MemberCard';

const AdminMembersPage = () => {
  const arr =[
    ["한동네","#A8302","1조/Node.js"],["이동네","#C8294","2조/Spring"] //데이터 API 적용
  ]
  return (
  <div>
    {arr.map((arr_elem)=> <MemberCard
      arr={arr_elem}
    />)}
  </div>
  );
};
  
export default AdminMembersPage;