import React from 'react';
import BackgroundTemplate from '../../template/BackgroundTemplate';
import styled from 'styled-components';
import palette from '../../styles/pallete';
import Mypage from '../../components/Mypage';
import ArrowBackIcon from '../../styles/imgs/icon/Arrow_back.png';
import register3 from '../../styles/imgs/icon/3.png';
import { Link } from 'react-router-dom';

const WhiteBox = styled.div`
  position: relative;
  font-family: 'Pretendard Regular';
  font-size: 1rem;
  color: #333333;
  /* color: ${palette[3]}; */
`;

const UserRegisterCheck3 = () => {
  return (
    <BackgroundTemplate style={{ zIndex: 0 }}>
        <WhiteBox style={{ zIndex: 1 }}>
          <Mypage />
        </WhiteBox>
    </BackgroundTemplate>
  );
};

export default UserRegisterCheck3;