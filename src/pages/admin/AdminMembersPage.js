import React from 'react';
import styled from 'styled-components';
import MemberCard from '../../components/MemberCard';
import palette from '../../styles/pallete';

const WhiteBox = styled.div`
  position: relative;
  
  width: 1458px;
  height: 884px;
  left: 402px;
  top: 201px;

`;

const AdminMembersPage = () => {
  
  const arr =[
    ["한동네","#A8302","1조/Node.js"],["이동네","#C8294","2조/Spring"]
  ]  //데이터 API 적용
  return (
    <WhiteBox style={{ zIndex: 1 }}>
        <div>
          {arr.map((arr_elem)=> <MemberCard
            arr={arr_elem}
          />)}
        </div>
    </WhiteBox>

  );
};
  
export default AdminMembersPage;