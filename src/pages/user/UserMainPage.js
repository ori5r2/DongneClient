import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundTemplate from '../../template/BackgroundTemplate';
import Button from '../../components/Button';
import palette from '../../styles/pallete';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Logo from '../../styles/imgs/icon/Logo.png';
import Enterlist from "../../components/Enterlist";

const WhiteBox = styled.div`
  position: relative;
  width: 60vh;

  justify-content: center;
  text-align: center;
  font-family: 'Pretendard Regular';
  font-size: 1rem;
  color: ${palette[3]};

  .Logo{
    width: 2rem;
    padding-bottom:0.5rem;
  }
  .ExtraBold {
    font-family: 'Pretendard ExtraBold';
    font-size: 2rem;
  }

  .outline{
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
  }

  .ClubCold{
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
  }
`;

const UserMainPage = () => {
  const history = useHistory();

  return (
    <BackgroundTemplate style={{ zindex: 0 }}>
      <WhiteBox style={{ zIndex: 1 }}>
        <img src={Logo} className="Logo" />
        <div style={{ marginBottom: '1rem' }}>
          동아리 관리를 더욱 간편하게, 동네
        </div>
        <div className="ExtraBold" style={{ marginBottom: '2rem' }}>
          Dongne 님의 워크스페이스
        </div>
        <div className='outline'>
          <Enterlist name="UMC" />
          <Enterlist name="Dongne" />
          <Enterlist name="CluvM" />
        </div>

        <div className='ClubCode'>
          <div>단체 코드를 받으셨나요?</div>
          <Link>가입하기</Link>
        </div>
      </WhiteBox>
    </BackgroundTemplate>
  );
};

export default UserMainPage;
