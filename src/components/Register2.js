import React, {useState, useEffect}  from 'react';
import Email from '../styles/imgs/icon/Email.png';
import Lock from '../styles/imgs/icon/Lock.png';
import Button from '../components/Button';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import palette from '../styles/pallete';

const WhiteBox = styled.div`
    width: 35rem;
    height: 28rem;
    background-color: #ffffff;
    border-radius: 10px;
    padding-left: 3rem;
    padding-right: 3rem;
    font-size: 1rem;

    color: #2D3B5C; 

    
`


function Register2(props) {

    return (
        <WhiteBox> 
            <div className='outline'>
                <div>
                </div>
            </div>
        </WhiteBox>
    );
  }
  
  export default Register2;
  