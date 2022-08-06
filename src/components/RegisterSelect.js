import React from 'react';
import Button from '../components/Button';
import styled, { css } from 'styled-components';
import palette from '../styles/pallete';
import { useHistory } from 'react-router-dom';
import userLoginIcon from '../styles/imgs/icon/login_user_icon.png';
import adminLoginIcon from '../styles/imgs/icon/login_admin_icon.png';

const RegisterSelect = () => {
    const history = useHistory();
    const RegisterSelectBtn = styled.div`
        width: 250px;
        height: 15rem;

        .title{
            font-family: 'Pretendard ExtraBold';
            font-size: 1.5rem;
        }

        .subtitle{
            font-size: 1 rem;
            font-weight: lighter;
        }

        span{
            color: ${palette[4]};
            font-size: 1rem;
            font-weight: lighter;
            padding-bottom: 10px;
        }

        .explain{
            color: ${palette[4]};
            font-size: 0.8rem;
        }
    `;
    const StyledImg = styled.img`
    width: 2rem;
    margin: 0.5rem;
  `;
    
    return (
    <div>
        <RegisterSelectBtn>
        <div>
            <img src={userLoginIcon} alt="userLoginIcon" />
            {/* todo:icon */}
            <div className='title'>단체회원</div>
            <div className='subtitle' style={{ marginBottom: '2rem' }}>(그룹 운영자 및 임원진)</div>
            <span>⦁ 회원관리</span><br />
            <span>⦁ 출결관리</span><br />
            <span>⦁ 회계관리</span><br />
            <span>⦁ 동아리 홍보</span><br />
            <span>⋮</span><br />
            <div className='explain'>일정 관리 및 다양한 동아리 활동들을<br /></div>    
            <div className='explain'>편리하게 관리하세요!</div>
        </div>
        
        <Button
          text="가입하기"
          fullWidth
          history={history}
          to="admin/login"
        />

        </RegisterSelectBtn>
    </div>
    );
  };
  
  export default RegisterSelect;
  
