import styled from 'styled-components';
import importImg from '../styles/importImg';
import palette from '../styles/pallete';
import Card from './Card';
import data from '../data';
import { useEffect, useState } from 'react';
import AttendModal from './AttendModal';
import {
  Route,
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import EventButton from './EventButton';
import client from '../axiosConfig';
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
    margin-left: 2.5rem;
    width: 8rem;
    height: 3rem;
    font-weight: 600;
  }
  .back_arrow {
    margin-right: 1rem;
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

const GroupSchedules = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const groupIdx = match.params.id;
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const jwtToken = sessionStorage.getItem('jwtToken');
  const adminIdx2 = sessionStorage.getItem('adminIdx');
  const [success, setSuccess] = useState(false);
  const [schedules, setSchedules] = useState([]);

  const onClickBack = () => {
    history.goBack();
  };
  const onClickForModal = () => {
    setModal((current) => !current);
  };
  useEffect(() => {
    const fetchSchedule = async (jwt, adminIdx) => {
      await client
        .get('/admin/schedule/list', {
          headers: {
            'x-access-token': jwt,
          },
          params: {
            adminIdx: adminIdx,
            groupIdx: groupIdx,
            curPage: 1,
          },
        })
        .then(function (response) {
          setSchedules(response.data.result);
          setSuccess(true);
          if (!response.data.isSuccess) {
            alert(response.data.message);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fetchSchedule(jwtToken, adminIdx2);
  }, []);
  console.log('hi', schedules);

  return (
    <StyledAttendanceBody>
      <div className="attend_header">
        <div className="attend_header__left">
          <TextBtn onClick={onClickBack} className="back_arrow">
            <img src={importImg.attendBackChevron}></img>
          </TextBtn>
          <img src={importImg.attendCheck} />
          <div>
            {success ? `${schedules.schedule[0].groupName} - 출결관리` : null}
          </div>
        </div>
        <div className="attend_header__right">
          <TextBtn>카드로 보기</TextBtn>
          <div className="attend_header_textBtn_bar">|</div>
          <TextBtn className="textBtn_off">표로 보기</TextBtn>
          <div className="addBtn">
            <EventButton text={'추가하기 +'} />
          </div>
        </div>
      </div>
      <div className="attend_body">
        {success ? (
          <Card
            key={schedules.schedule[0].scheduleIdx}
            className="eachCard"
            subTitle={schedules.schedule[0].scheduleDate}
            title={schedules.schedule[0].scheduleName}
            onClickForDetail={onClickForModal}
            isGroupDetail={false}
            onClickForGroup={null}
          />
        ) : (
          <div>출결 목록이 존재하지 않습니다.</div>
        )}
      </div>

      {
        modal === true ? (
          <AttendModal groupIdx={null} onClick={onClickForModal} />
        ) : null //기계역할
      }
    </StyledAttendanceBody>
  );
};

export default GroupSchedules;
