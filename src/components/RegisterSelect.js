import React from 'react';
import Button from '../components/Button';
import styled, { css } from 'styled-components';
import palette from '../styles/pallete';
import { useHistory } from 'react-router-dom';

const RegisterSelect = (props) => {
    const history = useHistory();
    const RegisterSelectBtn = styled.div`
        width: 250px;
        height: 18rem;
        background-color: #ffffff;

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
    color: ${palette[1]};
  `;

    const StlyedList = styled.span`
    color: ${palette[4]};
    font-size: 0.8rem;
    font-weight: lighter;
    padding-bottom: 10px;
    `

    const title=props.title;
    const subtitle=props.subtitle;
    const img_src = props.img_src;
    const text1 = props.text1;
    const text2 = props.text2;
    const text3 = props.text3;
    const text4 = props.text4;
    
    return (
    <div>
        <RegisterSelectBtn>
        <div>
            {img_src ? <StyledImg src={img_src} /> : <div />}
            <div className='title'>{title}</div>
            <div className='subtitle' style={{ marginBottom: '2rem' }}>({subtitle})</div>
            <StlyedList>{text1}<br />{text2}<br />{text3}<br />{text4}<br /></StlyedList>
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
  
