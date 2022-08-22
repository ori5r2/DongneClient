import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/pallete';
import SidebarTemplate from '../../template/SidebarTemplate';
import { useState } from 'react';
import importImg from '../../styles/importImg';
import EventButton from '../../components/EventButton';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import MembersModal from '../../components/MembersModal';

const StyleldFinanceBody = styled.div`
  position: relative;
  width: 91.0625rem;
  height: 55.125rem;
  margin-top: 3.625rem;
  margin-left: 3.25rem;
  margin-right: 4.1875rem;
  margin-bottom: 3.75rem;
  font-family: 'Pretendard Regular';

  h1 {
    color: ${palette[5]};
    font-size: 1.3rem;
    font-family: 'Pretendard ExtraBold';
  }
  h4 {
    font-family: 'Pretendard Regular';
  }

  .finance_header {
    width: inherit;
    display: flex;
    justify-content: space-between;
    align-items: start;
    color: ${palette[5]};
  }
  .finance_header_group {
    width: 44.6875rem;
    font-size: 1rem;
    // margin-left: 1.5rem;
    display: flex;
    align-items: flex-start;
  }
  .finance_header_group > img {
    position: relative;
    bottom: 0.3rem;
  }
  .finance_header_title {
    margin-left: 0.875rem;
  }
  .finance_header_title > h4 {
    margin-top: 0.9375rem;
    width: 17.9375rem;
  }

  .finance_header_date {
    position: relative;
    bottom: 1rem;
    display: flex;
    align-items: center;
    width: 11.4375rem;
    height: 3rem;
    margin-left: 13.75rem;
  }
  .finance_header_date > h1 {
    width: 5rem;
    height: 1.6875rem;
    font-size: 1.1rem;
    text-align: center;
    line-height: 1.6875rem;
  }

  .finance_header_right {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
  .finance_header_textBtn_bar {
    margin: 0rem 1.25rem;
  }

  .textBtn_off {
    color: ${palette[1][2]};
    font-family: 'Pretendard Regular';
    font-weight: 400;
  }
  .imageBtn {
    border: none;
    background-color: #11ffee00;
    cursor: pointer;
    padding: 0;
  }
  .finance_body {
    margin-top: 2.3rem;
    display: flex;
    flex-wrap: wrap;
  }
`;

const StyledLeftBox = styled.div`
  font-family: 'Pretendard Regular';
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 44.6875rem;
  height: 49.5rem;
  // margin-top: 1.625rem;

  .DayPicker {
    display: inline-block;
    font-size: 1rem;
    width: 44.6875rem;
  }
  .button {
    display: flex;
    flex-direction: row;
    margin-top: 1.25rem;
    justify-content: space-between;
    width: 44.625rem;
  }
  .addBtn {
    width: 21.6875rem;
    height: 3rem;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
  .subtractBtn {
    width: 21.6875rem;
    height: 3rem;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

const StyledSum = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  width: 42rem;
  height: 21.25rem;
  margin-left:3.9375rem;

  .sum_title {
    font-size: 1.1rem;
    color: ${palette[4]};
    display: flex;
    flex-direction: row;
    width: 14.1875rem;
    height: 2rem;
    align-items:center;
  }
  .sum_title > h1 {
    margin-left: 0.875rem;
  }

  .sum_body {
    margin-top: 2.25rem;
    width: 41.75rem;
    height: 17rem;
    padding: 1.4rem 0rem;
    align-items:center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .sum_body_left {
    width: 13rem;
    height: 16.6875rem;
    // padding: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .sum_body_right {
    width: 18.5rem;
    height: 16.6875rem;
  }
`;

const StyledRecent = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  width: 42.4375rem;
  height: 25.125rem;
  margin-left:3.9375rem;
  margin-top: 3.125rem;

  .recent_title {
    font-size: 1.1rem;
    color: ${palette[4]};
    display: flex;
    flex-direction: row;
    width: 14.1875rem;
    height: 2rem;
    align-items:center;
  }
  .recent_title > h1 {
    margin-left: 0.875rem;
  }

  .recent_body {
    margin-top: 1.5rem;
    width: 42.1875rem;
    height: 21.625rem;
    padding: 1.4rem 0rem;
    align-items:center;
    justify-content: space-between;
  }
  .MoreBtm {
    marint-top: 1.4375rem;
    width: 42.1875rem;
    height: 3rem;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5rem;
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
  font-weight: 800;
`;

const CalendarBox = () => {
  moment.locale('ko-KR');
  const localizer = momentLocalizer(moment);
  const myEventsList = [
    { start: new Date(), end: new Date(), title: 'special event' },
  ];

  return (
    <StyledLeftBox>
      <div className="DayPicker">
        <Calendar
          localizer={localizer}
          events={myEventsList}
          style={{ height: 724 }}
        />
      </div>
      <div className="button">
        <EventButton text={'+ 더하기'} className="addBtn"></EventButton>
        <EventButton text={'- 빼기'} className="subtractBtn"></EventButton>
      </div>
    </StyledLeftBox>
  );
};

const Sum = () => {
  return (
    <StyledSum>
      <div className="sum_title">
          <img src={importImg.homeMemo} />
          <h1>동네 회계 8월 요약</h1>
      </div>
      <div className="sum_body">
        <div className="sum_left">
            <h1>동네 회계 8월 요약</h1>
        </div>
        <img src={importImg.line} />
        <div className="sum_right">
            <h1>동네 회계 8월 요약</h1>
        </div>
      </div>
    </StyledSum>
  );
};

const Recent = () => {
  return (
    <StyledRecent>
      <div className="recent_title">
          <img src={importImg.homeMemo} />
          <h1>동네 회계 최근 내역</h1>
      </div>
      <div className="recent_body">
        <EventButton text={'더보기'} className="MoreBtn"></EventButton>
      </div>
    </StyledRecent>
  );
};

const AdminFinancePage = () => {
  const [modal, setModal] = useState(false);
  const onClickForModal = () => {
    setModal((current) => !current);
  };
  return (
    <SidebarTemplate pageNum={3}>
      <StyleldFinanceBody>
        <div className="finance_header">
          <div className="finance_header_group">
            <img src={importImg.money}></img>
            <div className="finance_header_title">
              <h1>동네 8월 회계 현황</h1>
              <h4>날짜를 클릭하여 회계 현황을 확인하세요!</h4>
            </div>

            <div className="finance_header_date">
              <button className="imageBtn">
                <img src={importImg.chevronLeft}></img>
              </button>
              <h1>2022.08</h1>
              <button className="imageBtn">
                <img src={importImg.chevronRight}></img>
              </button>
            </div>
          </div>
          <div className="finance_header_right">
            <TextBtn>달력으로 보기</TextBtn>
            <div className="finance_header_textBtn_bar">|</div>
            <TextBtn className="textBtn_off">표로 보기</TextBtn>
          </div>
        </div>
        <div className="finance_body">
          <CalendarBox />
          <div className="sideBox">
            <Sum />
            <Recent />
          </div>
        </div>

        {modal == true ? <MembersModal onClick={onClickForModal} /> : null}
      </StyleldFinanceBody>
    </SidebarTemplate>
  );
};

export default AdminFinancePage;
