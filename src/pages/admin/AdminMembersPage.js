import React from 'react';
import styled from 'styled-components';
import MembersCard from '../../components/MembersCard';
import palette from '../../styles/pallete';
import SidebarTemplate from '../../template/SidebarTemplate';
import data from '../../membersData';
import { useState } from 'react';
import MembersModal from '../../components/MembersModal';

const StyleldMembersBody = styled.div`
  position: relative;
  width: inherit;
  margin-top: 3.75rem;
  margin-left: 3.25rem;
  margin-right: 3rem;
  font-family: 'Pretendard Regular';
  .members_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .members_header__left {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: ${palette[5]};
    font-family: 'Pretendard Bold';
  }
  .members_header__left > div {
    margin-left: 1rem;
  }
  .members_header__right {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
  }
  .members_body {
    margin-top: 2.3rem;
    display: flex;
    flex-wrap: wrap;
  }
  .eachCard {
    margin-right: 1rem;
    margin-top: 2.25rem;
  }
  .eachCard:nth-child(-n + 7) {
    margin-top: 0rem;
  }
  .eachCard:nth-child(8n) {
    margin-right: 0rem;
  }
`;

const AdminMembersPage = () => {
  const [modal, setModal] = useState(true);
  const onClickForModal = () => {
    setModal((current) => !current);
  };
  return (
    <SidebarTemplate isMembers={true}>
      <StyleldMembersBody
    >
        <div className="members_header">
          <div className="members_header__left">
            {/* <img src={importImg.} /> */}
            <div>현재 활동 회원 명단</div>
          </div>
          <div className="members_header__right">
            <div>카드로 보기</div>
            <div> | </div>
            <div>표로 보기</div>
            <button>항목추가하기</button>
          </div>
        </div>
        <div className="members_body">
          {data.membersData.map((elem) => (
            <div className="eachCard">
              <MembersCard
                UserName={elem.UserName}
                UserCode={elem.UserCode}
                UserTeam={elem.UserTeam}
                onClick={onClickForModal}
              />
            </div>
          ))}
        </div>

        {
          modal == true ? <MembersModal onClick={onClickForModal} /> : null
        }
      </StyleldMembersBody>
    </SidebarTemplate>
  );
};
  
export default AdminMembersPage;