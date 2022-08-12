import React, {useState, useEffect}  from 'react';
import Email from '../styles/imgs/icon/Email.png';
import Lock from '../styles/imgs/icon/Lock.png';
import Button from '../components/Button';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const WhiteBox = styled.div`
    width: 35rem;
    height: 28rem;
    background-color: #ffffff;
    border-radius: 10px;
    padding-left: 3rem;
    padding-right: 3rem;
    font-size: 1rem;

    color: #000000;  

`


function Agreement(props) {
    const history  = useHistory();
    const nextlink = props.nextlink;
    return (
        <WhiteBox>  
            <div>
                <img src={Email} className="ID" alt="" /> 아이디 <span style={{color:"blue"}}>(필수)</span>
            </div>
            <div>
                <img src={Lock} className="PW" alt="" /> 비밀번호 <span style={{color:"blue"}}>(필수)</span>
            </div>
            <div>
                <img src={Lock} className="PWcheck" alt="" /> 비밀번호 확인 <span style={{color:"blue"}}>(필수)</span>
            </div>
            <div>
                <div> 본인 확인 메일<span  style={{color: '#D5D5D5' }}>(선택)</span></div>
            </div>
        <Button
          text="다음으로"
          fullWidth
          history={history}
          to={nextlink}
        />
        </WhiteBox>
    );
  }
  
  export default Agreement;
  