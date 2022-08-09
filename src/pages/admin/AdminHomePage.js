import React from 'react';
import styled from 'styled-components';
import HomePageTemplate from '../../template/HomePageTemplate';
import vector from '../../styles/imgs/background/VectorHome.png';
import HomeSideBarTemplate from '../../template/HomeSideBarTemplate';
import palette from '../../styles/pallete';

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
  width: 25rem;
  .header {
    display: flex;
    justify-content: space-between;
  }
`;

const Calendar = () => {
  return (
    <StyledMiddleBox>
      <div className="header">
        <div>
          <icon></icon>
          <title></title>
          <subtitle>sd</subtitle>
        </div>

        <div>
          <chevronRight></chevronRight>
          <span>2022.07</span>
          <chevronLeft></chevronLeft>
        </div>
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
              <Calendar />
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
