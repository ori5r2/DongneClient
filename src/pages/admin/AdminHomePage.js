import React from 'react';
import styled from 'styled-components';
import HomePageTemplate from '../../template/HomePageTemplate';
import vector from '../../styles/imgs/background/VectorHome.png';
import HomeSideBarTemplate from '../../template/HomeSideBarTemplate';
import palette from '../../styles/pallete';

import calenderIcon from '../../styles/imgs/icon/home_calender.png';
import chevronRight from '../../styles/imgs/icon/chevron_right.png';
import chevronLeft from '../../styles/imgs/icon/chevron_left.png';

import importImg from '../../styles/importImg';

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
  font-family: 'Pretendard Regular';
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //padding-top: 10%;
  background: ${palette.background};
  h1 {
    color: ${palette[5]};
    font-size: 1.3rem;
    font-family: 'Pretendard ExtraBold';
  }
  h4 {
    font-family: 'Pretendard Regular';
  }

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
  .headerTitle > h4 {
    margin-top: 0.3rem;
  }
  .headerDate {
    position: relative;
    bottom: 0.5rem;
    display: flex;
    align-items: center;
    margin-left: 2.4rem;
  }

  .headerDate > h1 {
    font-size: 1.1rem;
  }
  .headerDate > h4 {
    margin-top: 0.3rem;
  }
  .DayPicker {
    display: inline-block;
    font-size: 1rem;
    margin-top: 3rem;
  }
  .button {
    margin-top: 3rem;
  }
`;

const StyledMemo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35rem;
  padding: 0rem 0rem;
  margin-left: 7rem;
  margin-top: 4rem;
  .memo_header {
    display: flex;
    width: inherit;
    align-items: center;
    justify-content: space-between;
  }

  .memo_header__left {
    display: flex;
    align-items: center;
  }
  .memo_header__title {
    margin-left: 1rem;
  }
  .memo_header__title > h4 {
    margin-top: 0.3rem;
  }
  .li_header__title {
    font-size: 1.1rem;
    color: ${palette[4]};
  }
  .li_header__date {
    font-family: 'Pretendard Light';
    margin-top: 0.3rem;
  }
  .memo_body {
    margin-top: 3rem;
    width: inherit;
    padding: 1.4rem 0rem;
    border-radius: 1rem;
    background: linear-gradient(
      180deg,
      #fbfbfb 0%,
      rgba(251, 251, 251, 0) 100%
    );
    backdrop-filter: blur(10rem);
  }
  .memo_body__li {
    padding: 15px;
    display: flex;
    justify-content: space-between;
  }
  .memo__li__content {
    margin-left: 1rem;
    width: 50%;
  }
  .memoBtn {
    margin-top: 1.4rem;
    width: inherit;
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
        <img src={importImg.calenderIcon}></img>
        <div className="headerTitle">
          <h1>동네 7월 공식 일정</h1>
          <h4>날짜를 클릭하여 동아리 일정을 편리하게 추가하고 수정하세요!</h4>
        </div>

        <div className="headerDate">
          <img src={importImg.chevronLeft}></img>
          <h1>2022.07</h1>
          <img src={importImg.chevronRight}></img>
        </div>
      </div>
      <div className="DayPicker">
        <Calendar
          localizer={localizer}
          events={myEventsList}
          style={{ height: 500 }}
        />
      </div>
      <div className="button">
        <Button text={'수정'}></Button>
      </div>
    </StyledMiddleBox>
  );
};

const Memo = () => {
  return (
    <StyledMemo>
      <div className="memo_header">
        <div className="memo_header__left">
          <img src={importImg.homeMemo} />
          <div className="memo_header__title">
            <h1>동네 관리 메모장</h1>
            <h4>잊을 법한 내용을 정리하고 기억하세요.</h4>
          </div>
        </div>
        <div>
          <img src={importImg.homeCreate} />
          <img src={importImg.homeSetting} />
        </div>
      </div>
      <ul className="memo_body">
        <li className="memo_body__li">
          <div className="memo_li__header">
            <h1 className="li_header__title">7월 1일자 회의록</h1>
            <div className="li_header__date">2022.07.01</div>
          </div>
          <div className="memo__li__content">
            <span>
              1.커스터마이징: 범위가 넓을것 2. 회원관리 대부분 게시판으로
            </span>
          </div>
        </li>
        <li className="memo_body__li">
          <div className="memo_li__header">
            <h1 className="li_header__title">7월 1일자 회의록</h1>
            <div className="li_header__date">2022.07.01</div>
          </div>
          <div className="memo__li__content">
            <span>
              1.커스터마이징: 범위가 넓을것 2. 회원관리 대부분 게시판으로
            </span>
          </div>
        </li>
        <li className="memo_body__li">
          <div className="memo_li__header">
            <h1 className="li_header__title">7월 1일자 회의록</h1>
            <div className="li_header__date">2022.07.01</div>
          </div>
          <div className="memo__li__content">
            <span>
              1.커스터마이징: 범위가 넓을것 2. 회원관리 대부분 게시판으로
            </span>
          </div>
        </li>
      </ul>
      <Button text={'더보기'} className="memoBtn"></Button>
    </StyledMemo>
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
