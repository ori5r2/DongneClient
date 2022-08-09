import React from 'react';
import styled from 'styled-components';
import HomePageTemplate from '../../template/HomePageTemplate';
import vector from '../../styles/imgs/background/VectorHome.png';
import HomeSideBarTemplate from '../../template/HomeSideBarTemplate';
import palette from '../../styles/pallete';
import calenderIcon from '../../styles/imgs/icon/home_calender.png';
import chevronRight from '../../styles/imgs/icon/chevron_right.png';
import chevronLeft from '../../styles/imgs/icon/chevron_left.png';
import Button from '../../components/Button';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const StyledImg = styled.img`
  position: fixed;
  right: 0;
  bottom: 0;
`;

const BackgroundImg = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //padding-top: 10%;
  background: ${palette.background};

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }

  .homeFlex {
    display: flex;
    justify-content: space-around;
  }
`;

const StyledMiddleBox = styled.div`
  font-family: 'Pretendard Regular';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  margin-top: 4rem;
  margin-left: 3rem;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    color: ${palette[5]};
  }
  .headerTitle {
    font-size: 1rem;
    margin-left: 1.5rem;
  }
  .headerDate {
    position: relative;
    bottom: 0.5rem;
    display: flex;
    align-items: center;
    margin-left: 2.4rem;
  }
  h1 {
    font-size: 1.3rem;
    font-family: 'Pretendard ExtraBold';
  }
  h4 {
    font-family: 'Pretendard Regular';
  }
  .headerDate > h1 {
    font-size: 1.1rem;
  }
  .DayPicker {
    display: inline-block;
    font-size: 1rem;
  }
`;

const CalendarBox = () => {
  moment.locale('ko-KR');
  const localizer = momentLocalizer(moment);
  const myEventsList = [
    { start: new Date(), end: new Date(), title: 'special event' },
  ];

  return (
    <StyledMiddleBox>
      <div className="header">
        <img src={calenderIcon}></img>
        <div className="headerTitle">
          <h1>동네 7월 공식 일정</h1>
          <h4>날짜를 클릭하여 동아리 일정을 편리하게 추가하고 수정하세요!</h4>
        </div>

        <div className="headerDate">
          <img src={chevronLeft}></img>
          <h1>2022.07</h1>
          <img src={chevronRight}></img>
        </div>
      </div>
      <div className="DayPicker">
        <Calendar
          localizer={localizer}
          events={myEventsList}
          style={{ height: 500 }}
        />
      </div>
      <div>
        <Button text={'수정'}></Button>
      </div>
    </StyledMiddleBox>
  );
};

const Memo = () => {
  return (
    <div>
      <span>HI</span>
    </div>
  );
};

const Photo = () => {
  return (
    <div>
      <span>Photo</span>
    </div>
  );
};

const AdminHomePage = () => {
  return (
    <div>
      <BackgroundImg>
        <HomePageTemplate location={0}>
          <HomeSideBarTemplate>
            <div className="homeFlex">
              <CalendarBox />
              <div>
                <button onClick={() => console.log('hi')}>Hi</button>
                <Memo />
                <Photo />
              </div>
            </div>
          </HomeSideBarTemplate>
        </HomePageTemplate>
        <footer
          style={{ position: 'absolute', bottom: '0', right: 0, zIndex: -1000 }}
        >
          <StyledImg src={vector} />
        </footer>
      </BackgroundImg>
    </div>
  );
};

export default AdminHomePage;
