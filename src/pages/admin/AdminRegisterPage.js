import React from 'react';
import BackgroundTemplate from '../../template/BackgroundTemplate';
import styled from 'styled-components';
import palette from '../../styles/pallete';
import RegisterSelect from '../../components/RegisterSelect';
import userLoginIcon from '../../styles/imgs/icon/User_blue.png';
import adminLoginIcon from '../../styles/imgs/icon/Admin_blue.png';
import Button from '../../components/Button';

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
    <BackgroundTemplate style={{ zIndex: 0 }}>
        <WhiteBox style={{ zIndex: 1 }}>
        <div className="Logo">LOGO</div>
        <div className="ExtraBold" style={{ marginBottom: '2rem' }}>
          회원 가입
        </div>
        <div className='Square'>
            <RegisterSelect 
              style={{ zindex: 1 }} 
              title="단체 회원"
              subtitle="그룹 운영자 및 임원진"
              img_src={adminLoginIcon}
              text1="⦁ 회원 관리"
              text2="⦁ 출결 관리"
              text3="⦁ 회계 관리"
              text4="⦁ 동아리 홍보"
              to="/admin/register/check1" />
            <RegisterSelect 
              style={{ zindex: 1 }}
              title="일반 회원"
              subtitle="대학생, 취준생, 직장인 등"
              img_src={userLoginIcon} 
              text1="⦁ 친목 도모"
              text2="⦁ 자기 개발"
              text3="⦁ 출석 체크"
              text4="⦁ 동아리 홍보"
              to="/admin/register/check1" />
        </div>
        </WhiteBox>
    </BackgroundTemplate>
  );
};

export default AdminRegisterPage;