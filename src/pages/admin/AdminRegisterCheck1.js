import React from 'react';
import BackgroundTemplate from '../../template/BackgroundTemplate';
import styled from 'styled-components';
import palette from '../../styles/pallete';
import Agreement from '../../components/Agreement';

const WhiteBox = styled.div`
  position: relative;
  width: 50vh;

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
    <BackgroundTemplate style={{ zIndex: 0 }}>
        <WhiteBox style={{ zIndex: 1 }}>
        <div className="ExtraBold" style={{ marginBottom: '2rem' }}>
         단체 회원 가입
        </div>
        <Agreement
          Nextpage="/admin/register/check2"
        />
        </WhiteBox>
    </BackgroundTemplate>
  );
};

export default AdminRegisterCheck1;