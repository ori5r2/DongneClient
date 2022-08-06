import React from 'react';
import BackgroundTemplate from '../../template/BackgroundTemplate';
import styled from 'styled-components';
import palette from '../../styles/pallete';
import RegisterSelect from '../../components/RegisterSelect';
// import Button from '../components/Button';


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

  .Square{
    display: flex;
    flex-direction: row
    flex-wrap: wrap;
    justify-content: center;
  }

`;



const AdminRegisterPage = () => {
  return (
    <BackgroundTemplate style={{ zindex: 0 }}>
        <WhiteBox style={{ zindex: 1 }}>
        <div className="Logo">LOGO</div>
        <div className="ExtraBold" style={{ marginBottom: '2rem' }}>
          회원 가입
        </div>
        <div className='Square'>
            <RegisterSelect style={{ zindex: 1 }}/>
            <RegisterSelect style={{ zindex: 1 }}/>
        </div>
        </WhiteBox>
    </BackgroundTemplate>
  );
};

export default AdminRegisterPage;