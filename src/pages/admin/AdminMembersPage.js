import React from 'react';
import styled from 'styled-components';
import MembersCard from '../../components/MembersCard';
import palette from '../../styles/pallete';
import SidebarTemplate from '../../template/SidebarTemplate';
import membersData from '../../membersData';
import { useState } from 'react';
import MembersModal from '../../components/MembersModal';
import importImg from '../../styles/importImg';
import EventButton from '../../components/EventButton';

const StyleldMembersBody = styled.div`
  position: relative;
  width: inherit;
  margin-top: 3.75rem;
  margin-left: 3.25rem;
  // margin-right: 3rem;
  font-family: 'Pretendard Regular';
  .attend_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .attend_header__left {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: ${palette[5]};
    font-family: 'Pretendard Bold';
  }
  .attend_header__left > div {
    margin-left: 1rem;
  }
  .attend_header__right {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
  }
  .attend_header_textBtn_bar {
    margin: 0rem 1.25rem;
  }

  .textBtn_off {
    color: ${palette[1][2]};
    font-family: 'Pretendard Regular';
  }
  .addBtn {
    margin-left: 1.25rem;
    width: 10.4375rem;
    height: 3rem;
  }
  .members_body {
    margin-top: 2.3rem;
    display: flex;
    flex-wrap: wrap;
  }
  .eachCard {
    margin-right: 0rem;
    margin-top: 0rem;
  }
  .eachCard:nth-child(-n + 8) {
    margin-top: 0rem;
  }
  .eachCard:nth-child(8n) {
    margin-right: -1rem;
  }
`;
const TextBtn = styled.button`
  border: none;
  background-color: #11ffee00;
  cursor: pointer;
  padding: 0;
  font-family: 'Pretendard Bold';
  color: ${palette[3]};
  font-size: 1.25rem;
`;
const AdminMembersPage = () => {
  const [modal, setModal] = useState(false);
  const onClickForModal = () => {
    setModal((current) => !current);
  };
  return (
    <SidebarTemplate isMembers={true}>
      <StyleldMembersBody>
        <div className="attend_header">
          <div className="attend_header__left">
            <img src={importImg.attendCheck} />
            <div>출결관리</div>
          </div>
          <div className="attend_header__right">
            <TextBtn>카드로 보기</TextBtn>
            <div className="attend_header_textBtn_bar">|</div>
            <TextBtn className="textBtn_off">표로 보기</TextBtn>
            <div className="addBtn">
              <EventButton text={'항목 추가하기 +'} />
            </div>
          </div>
        </div>
        <div className="members_body">
          {membersData.Data.map((elem) => (
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

        {modal == true ? <MembersModal onClick={onClickForModal} /> : null}
      </StyleldMembersBody>
    </SidebarTemplate>
  );
};

export default AdminMembersPage;
