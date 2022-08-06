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
`;

const AdminHomePage = () => {
  return (
    <div>
      <BackgroundImg style={{ zIndex: 0 }}>
        <HomePageTemplate location={0} style={{ zIndex: 0 }}>
          <HomeSideBarTemplate></HomeSideBarTemplate>
        </HomePageTemplate>
        <footer
          style={{ position: 'absolute', bottom: '0', right: 0, zIndex: -1 }}
        >
          <StyledImg src={vector} />
        </footer>
      </BackgroundImg>
    </div>
  );
};

export default AdminHomePage;
