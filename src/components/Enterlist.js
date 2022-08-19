import React, {useState, useEffect}  from 'react';
import Email from '../styles/imgs/icon/Email.png';
import Lock from '../styles/imgs/icon/Lock.png';
import Button from '../components/Button';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import palette from '../styles/pallete';


const WhiteBox = styled.div`
    .list{
        display: flex;
        flex-direction: row;
    }
    .Clubname{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 23rem;
        height: 2.5rem;
        border: 1px solid #2B78FF;
        border-radius: 10px 0 0 10px;
        font-weight: 900;
    }

    .btn{
        border-top-left-radius: 0px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 0px;
    }
`


function Enterlist(props) {
    const name = props.name;
    return (
        <WhiteBox> 
            <div className='list'>
            <div className='Clubname'> {/* <img /> */} {name} </div>
            <Button 
              className="btn"
              text={"입장하기"}
              style={{height: "2.6rem", width: "7rem"}}
              // 왜3rem은 안되지
            />
          </div>
        </WhiteBox>
    );
  }
  
  export default Enterlist;
  