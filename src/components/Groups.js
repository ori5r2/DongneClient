import styled from 'styled-components';
import importImg from '../styles/importImg';
import palette from '../styles/pallete';
import Card from './Card';
import data from '../data';
import { useState } from 'react';
import AttendModal from './AttendModal';
import { Route, useLocation, useRouteMatch } from 'react-router-dom';
import Button from './Button';
import EventButton from './EventButton';
const StyledAttendanceBody = styled.div`
  /* position: relative; */
  width: inherit;
  margin-top: 3.75rem;
  margin-left: 3.25rem;
  margin-right: 3rem;
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

  .attend_body {
    margin-top: 2.3rem;
    display: flex;
    flex-wrap: wrap;
  }
  .eachCard {
    margin-right: 3rem;
    margin-top: 2.25rem;
  }
  .eachCard:nth-child(-n + 4) {
    margin-top: 0rem;
  }
  .eachCard:nth-child(4n) {
    margin-right: 0rem;
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
const Groups = () => {
  const [groupTitle, setGroupTitle] = useState('');
  const location = useLocation();
  const [modal, setModal] = useState(false);

  const onClickForModal = (idx) => {
    setModal((current) => !current);
    if (!modal) {
      setGroupTitle(data.attendData[idx - 1].title);
      console.log(idx);
    }
  };
  return (
    <StyledAttendanceBody>
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
      <div className="attend_body">
        {data.attendData.map((elem) => {
          return (
            <div key={elem.id} className="eachCard">
              <Card
                subTitle={elem.subTitle}
                title={elem.title}
                onClickForDetail={() => onClickForModal(elem.id)}
                onClickForGroup={null}
                key={elem.id}
                groupId={elem.id}
                isGroupDetail={true}
                to={`/admin/attendance/${elem.id}`}
              />
            </div>
          );
        })}
      </div>

      {
        modal === true ? (
          <AttendModal title={groupTitle} onClick={onClickForModal} />
        ) : null //기계역할
      }
    </StyledAttendanceBody>
  );
};

export default Groups;
