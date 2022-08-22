import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../styles/pallete';
// import data from '../data';
import EventButton from '../EventButton';
import importImg from '../../styles/importImg';
import membersData from '../../membersData';
import Avatar from './Avatar';
import client from '../../axiosConfig';
// import membersData from '../../src/membersData';
// import MembersCard from './MembersCard';
// import Avatar from '../../modals/Avatar';
// import client from '../axiosConfig';

const StyledModal = styled.div`
  position: fixed;
  width: 75rem;
  height: 38.75rem;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  background: #ffffff;
  box-shadow: 0rem 0rem 0.9375rem rgba(34, 42, 63, 0.6);
  border-radius: 0.625rem;
  display: flex;
  justify-content: center;

  .content-area {
    color: ${palette[5]};
    width: inherit;
    height: 32.75rem;
    margin: 3rem 3.875rem;
  }
  .header {
    font-size: 1.75rem;
    line-height: 160%;
    font-weight: 800;
    font-family: 'Pretendard Bold';
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .body {
    margin-top: 1rem;
    font-family: 'Pretendard Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 160%;
    // margin_top:1.9375rem;
    display: flex;
    align-items: flex-start;
    // position: relative;
  }

  .button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: -0.75rem;
  }
  .body__left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    font-size: 1.125rem;
    /* margin-bottom: 0.75rem; */
    margin-right: 2.5rem;
  }
  .body__right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    font-size: 1.125rem;
    margin-bottom: 0.75rem;
  }
  .name_input_formGroup {
    display: flex;
    align-items: center;
  }
  .name_input_form {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 0.75rem;
  }
  .name_input_form > span {
    width: 4.1875rem;
    white-space: nowrap;
  }
  .attended_members > .span {
    width: 4.1875rem;
    white-space: nowrap;
  }
  input {
    background: #f3f3f3;
    border-radius: 0.25rem;
    width: auto;
    height: 2.5rem;
    border: none;
    margin-left: 1.375rem;
    outline: none;
  }
  textarea {
    background: #f3f3f3;
    border-radius: 0.25rem;
    width: auto;
    height: 16.6875rem;
    border: none;
    margin-left: 1.375rem;
    resize: none;
    outline: none;
  }

  .name_input_formGroup > .name_input_form:nth-child(2) {
    margin-left: 1rem;
  }
  .codeButton {
    box-sizing: border-box;
    width: 6.4375rem;
    height: 2.5rem;
    border: 0.1875rem solid #2b78ff;
    border-radius: 0.25rem;
    background-color: ${palette[0]};
    color: ${palette[3]};
    font-family: 'Pretendard Bold';
    cursor: pointer;
    margin-left: 0.625rem;
  }
  .eventButton {
    width: 33.1875rem;
    height: 3.5rem;
    position: absolute;
    bottom: 3rem;
    /* margin-top: 2rem; */
  }
  .code__input {
    width: 21rem;
  }
  .long__input {
    width: 27.75rem;
  }
  .long_long_input {
    width: 27.75rem;
    height: 16.6875rem;
  }
  .members_body {
    width: 28rem;
    gap: 1px;
    height: 23.1875rem;
    margin-left: 1.125rem;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    overflow-x: hidden;
    -webkit-text-fill-color: black;
    transition: color 0.3s ease;
    color: rgba(0, 0, 0, 0);
  }

  .members_body::-webkit-scrollbar,
  .members_body::-webkit-scrollbar-thumb {
    width: 26px;
    border-radius: 13px;
    background-clip: padding-box;
    border: 10px solid transparent;
  }

  .members_body::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 10px;
  }
  .members_body:hover {
    color: rgba(0, 0, 0, 0.3);
  }

  .eachCard {
    /* flex: auto; */
    /* margin-right: 0.4rem; */
    margin-top: 0rem;
  }
  .attended_members {
    position: relative;
    display: flex;
    width: inherit;
    align-items: flex-start;
  }
  .not_attended {
    margin-top: 1.3125rem;
  }
`;

const SmokeBar = styled.div`
  position: absolute;
  bottom: 0rem;
  width: inherit;
  height: 3.25rem;

  background: linear-gradient(
    0deg,
    #ffffff 24.46%,
    rgba(255, 255, 255, 0) 100%
  );
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

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;
const GroupModal = ({ groupIdx, visible, onClick }) => {
  const [success, setSuccess] = useState(false);
  const [memberSuccess, setMemberSuccess] = useState(false);
  const jwtToken = sessionStorage.getItem('jwtToken');
  const adminIdx2 = sessionStorage.getItem('adminIdx');
  const [groupTitle, setGroupTitle] = useState('');
  const [groupCategory, setGroupCategory] = useState('');
  const [groupIntroduction, setGroupIntroduction] = useState('');
  const [groupMembers, setGroupMembers] = useState([]);
  console.log(jwtToken, adminIdx2);
  const [groupDetail, setgroupDetail] = useState({});

  const onChangeIntroduction = (e) => {
    setGroupIntroduction(e.target.value);
  };
  const onChangeCategory = (e) => setGroupCategory(e.target.value);
  const onChangeName = (e) => setGroupTitle(e.target.value);

  useEffect(() => {
    const fetchGroupMembers = async (jwt, adminIdx) => {
      await client
        .get('/admin/group/members', {
          headers: {
            'x-access-token': jwt,
          },
          params: {
            adminIdx: adminIdx,
            groupIdx: groupIdx,
            page: 1,
            pageSize: 10,
          },
        })
        .then((response) => {
          console.log(response);
          console.log(response.data.result);
          setGroupMembers(
            response.data.result.pagingRetrieveGroupMembersResult,
          );
          if (!response.data.isSuccess) {
            alert(response.data.message);
          }
        })
        .catch(function (error) {
          alert(error);
        });
    };
    if (memberSuccess) {
    } else {
      fetchGroupMembers(jwtToken, adminIdx2);
      setMemberSuccess(true);
    }
  }, [groupDetail]);

  useEffect(() => {
    const fetchGroupDetail = async (jwt, adminIdx) => {
      await client
        .get('/admin/group/info', {
          headers: {
            'x-access-token': jwt,
          },
          params: {
            adminIdx: adminIdx,
            groupIdx: groupIdx,
          },
        })
        .then((response) => {
          console.log('asdkn', response);
          console.log('two', response.data.result);
          setgroupDetail(response.data.result);
          console.log(success, groupIntroduction, groupCategory, groupTitle);
          if (!response.data.isSuccess) {
            alert(response.data.message);
          }
        })
        .catch(function (error) {
          alert(error);
        });
    };
    if (success) {
      setGroupIntroduction(groupDetail[0].groupIntroduction);
      setGroupCategory(groupDetail[0].groupCategory);
      setGroupTitle(groupDetail[0].groupName);
    } else {
      fetchGroupDetail(jwtToken, adminIdx2);
      setSuccess(true);
    }
  }, [groupDetail]);

  return (
    <>
      <ModalOverlay visible={visible} />
      <StyledModal>
        <div className="content-area">
          <div className="header">
            <div>{success ? groupTitle : ''}</div>
            <TextBtn onClick={onClick}>
              <img src={importImg.modalClose} />
            </TextBtn>
          </div>
          <div className="body">
            <form className="body__left">
              <div className="name_input_form">
                <span>카테고리</span>
                <input
                  type="text"
                  onChange={onChangeCategory}
                  value={success ? groupCategory : ''}
                  className="long__input"
                />
              </div>
              <div className="name_input_form">
                <span>항목</span>
                <input
                  type="text"
                  onChange={onChangeName}
                  value={success ? groupTitle : ''}
                  className="long__input"
                />
              </div>
              <div className="name_input_form">
                <span>내용</span>
                <textarea
                  maxLength="300"
                  onChange={onChangeIntroduction}
                  value={success ? groupIntroduction : ''}
                  className="long_long_input"
                />
              </div>
              <div className="eventButton">
                <EventButton text={'수정하기'} />
              </div>
            </form>
            <form className="body__right">
              <div className="attended_members">
                <div className="span">참여 회원</div>
                <div className="members_body">
                  {groupMembers.map((elem) => (
                    <div key={elem.userIdx} className="eachCard">
                      <Avatar
                        UserName={elem.name}
                        UserCode={elem.school}
                        UserTeam={elem.teamName}
                        // onClick={onClickForModal}
                      />
                    </div>
                  ))}
                </div>
                <SmokeBar></SmokeBar>
              </div>

              <div className="eventButton">
                <EventButton text={'삭제하기'} />
              </div>
            </form>
          </div>
        </div>
      </StyledModal>
    </>
  );
};

export default GroupModal;
