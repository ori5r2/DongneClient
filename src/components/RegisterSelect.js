import React from 'react';
import Button from '../components/Button';
import styled, { css } from 'styled-components';
import palette from '../styles/pallete';
import { useHistory } from 'react-router-dom';

const RegisterSelect = (props) => {
    const history = useHistory();
    const RegisterSelectBtn = styled.div`
        width: 14rem;
        height: 16rem;
        background-color: #ffffff;
        border-radius: 10px;
        outline: none;
        margin-bottom: 0.625rem;
        margin-top: -0.625rem;
        

        .title{
            font-family: 'Pretendard ExtraBold';
            font-size: 1rem;
        }

        .subtitle{
            font-size: 0.7rem;
            font-weight: lighter;
            margin-top: 0.2rem;
            color: ${palette[2]};
        }

        .explain{
            color: ${palette[4]};
            font-size: 0.5rem;
        }
    `;
    const StyledImg = styled.img`
    width: 2.5rem;
    margin-top: 1rem;
    margin-bottom: -0.5rem;
    color: ${palette[1]};
  `;

    const StlyedList = styled.span`
    color: ${palette[4]};
    font-size: 0.7rem;
    font-weight: lighter;
    padding-bottom: 1.25rem;
    `

    const title=props.title;
    const subtitle=props.subtitle;
    const img_src = props.img_src;
    const text1 = props.text1;
    const text2 = props.text2;
    const text3 = props.text3;
    const text4 = props.text4;
    const explain = props.explain;
    const nextlink=props.nextlink;
    
    return (
    <div className='RegisterSelectBtnTemplate' style={{margin:"0.625rem"}}>
        <RegisterSelectBtn>
        <div>
            {img_src ? <StyledImg src={img_src} /> : <div />}
            <div className='title'>{title}</div>
            <div className='subtitle' style={{ marginBottom: '1rem' }}>({subtitle})</div>
            <StlyedList>{text1}<br />{text2}<br />{text3}<br />{text4}<br /></StlyedList>
            <span>⋮</span><br />
            <div className='explain'>{explain}</div>
        </div>
        </RegisterSelectBtn>
        
        <Button
          text="가입하기"
          fullWidth
          history={history}
          to={nextlink}
        />

    </div>
    );
  };
  
  export default RegisterSelect;
  
