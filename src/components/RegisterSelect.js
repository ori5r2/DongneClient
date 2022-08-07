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
        backgruond-color: #ffffff;

        .title{
            font-family: 'Pretendard ExtraBold';
            font-size: 1.5rem;
        }

        .subtitle{
            font-size: 1 rem;
            font-weight: lighter;
            color: ${palette[2]};
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

    const StlyedList = styled.span`
    color: ${palette[4]};
    font-size: 1rem;
    font-weight: lighter;
    padding-bottom: 10px;
    `
    

    return (
    <div>
        <RegisterSelectBtn>
        <div>
            {/* {img_src ? <StyledImg src={img_src} /> : <div />} */}
            {/* todo:icon */}
            <div className='title'>단체회원</div>
            <div className='subtitle' style={{ marginBottom: '2rem' }}>(그룹 운영자 및 임원진)</div>
            {/* <StlyedList>{text}</StlyedList> */}
            <span>⋮</span><br />
            <div className='explain'>일정 관리 및 다양한 동아리 활동들을<br /></div>    
            <div className='explain'>편리하게 관리하세요!</div>
        </div>

        </RegisterSelectBtn>
        
        <Button
          text="가입하기"
          fullWidth
          history={history}
          to="/admin/register/check1"
        />

    </div>
    );
  };
  
  export default RegisterSelect;
  
