import HomePageTemplate from '../../template/HomePageTemplate';
import HomeSideBarTemplate from '../../template/HomeSideBarTemplate';
import SidebarTemplate from '../../template/SidebarTemplate';
import styled from 'styled-components';
import importImg from '../../styles/importImg';
import palette from '../../styles/pallete';
import Card from '../../components/Card';
import data from '../../data';
import { useState } from 'react';
import AttendModal from '../../components/AttendModal';

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
`;

const AdminAttendPage = () => {
  const [modal, setModal] = useState(true);
  const onClickForModal = () => {
    setModal((current) => !current);
  };
  return (
    <SidebarTemplate isAttendance={true}>
      <StyledAttendanceBody>
        <div className="attend_header">
          <div className="attend_header__left">
            <img src={importImg.attendCheck} />
            <div>출결관리</div>
          </div>
          <div className="attend_header__right">
            <div>카드로 보기</div>
            <div> | </div>
            <div>표로 보기</div>
            <button>항목추가하기</button>
          </div>
        </div>
        <div className="attend_body">
          {data.attendData.map((elem) => (
            <div className="eachCard">
              <Card
                subTitle={elem.subTitle}
                title={elem.title}
                onClick={onClickForModal}
              />
            </div>
          ))}
        </div>

        {
          modal == true ? <AttendModal onClick={onClickForModal} /> : null //기계역할
        }
      </StyledAttendanceBody>
    </SidebarTemplate>
  );
};

export default AdminAttendPage;
