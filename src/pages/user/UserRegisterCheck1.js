import React from 'react';
import BackgroundTemplate from '../../template/BackgroundTemplate';
import styled from 'styled-components';
import palette from '../../styles/pallete';

const WhiteBox = styled.div`
  position: relative;
  width: 50vh;
  padding-bottom: 10rem;

  text-align: center;
  font-family: 'Pretendard Regular';
  font-size: 1rem;
  color: ${palette[3]};

  .Logo {
    font-family: 'Pretendard Medium';
    color: #3333;
    margin-bottom: 2rem;
  }

  .ExtraBold {
    font-family: 'Pretendard ExtraBold';
    font-size: 2rem;
  }

`;



const AdminRegisterCheck1 = () => {
  return (
    <BackgroundTemplate style={{ zindex: 0 }}>
        <WhiteBox style={{ zindex: 1 }}>
        <div className="Logo">LOGO</div>
        <div className="ExtraBold" style={{ marginBottom: '2rem' }}>
         일반 회원 가입
        </div>
        </WhiteBox>
    </BackgroundTemplate>
  );
};

export default AdminRegisterCheck1;