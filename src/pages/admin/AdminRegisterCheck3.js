import React from 'react';
import BackgroundTemplate from '../../template/BackgroundTemplate';
import styled from 'styled-components';
import palette from '../../styles/pallete';
import ArrowBackIcon from '../../styles/imgs/icon/Arrow_back.png';
import { Link } from 'react-router-dom';
import Register2 from '../../components/Register2';

const WhiteBox = styled.div`
  position: relative;
  font-family: 'Pretendard Regular';
  font-size: 1rem;
  color: ${palette[3]};

  .arrowIcon {
    position: absolute;
    left: 0.625rem;
    top: 0.5rem;
    width:2.5rem;
    height:2.5rem;
  } 

  .Logo {
    font-family: 'Pretendard Medium';
    color: #3333;
    margin-bottom: 2rem;
  }

  .ExtraBold {
    font-family: 'Pretendard ExtraBold';
    font-size: 2rem;
    text-align: center;
    padding-bottom: 1rem;
  }

`;

const AdminRegisterCheck3 = () => {
  return (
    <BackgroundTemplate style={{ zIndex: 0 }}>
        <WhiteBox style={{ zIndex: 1 }}>
        <Link to="/admin/register/check2"><img src={ArrowBackIcon} alt='' className='arrowIcon' /></Link>
        <div className="ExtraBold" style={{ marginBottom: '0.5rem' }}>
         단체 회원 가입
        </div>
        <Register2 
          presentpage="/admin/register/check3"
          nextpage="/admin/register/check3"
        />
        </WhiteBox>
    </BackgroundTemplate>
  );
};

export default AdminRegisterCheck3;