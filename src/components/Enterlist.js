import React, {useState, useEffect}  from 'react';
import Button from '../components/Button';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


const WhiteBox = styled.div`

    display: flex;
    justify-content: center;
    .list{
        display: flex;
        flex-direction: row;
    }
    .Clubname{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 25rem;
        height: 3rem;
        border: 1px solid #2B78FF;
        border-radius: 10px 0 0 10px;
        font-family: 'Pretendard Bold';
        font-size: 1.2rem;
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
    const img = props.img;
    const link = props.link;
    
    return (
        <WhiteBox> 
            <div className='list'>
            <div className='Clubname'> 
                <img src={img} alt="" style={{padding:"0.5rem", height:"2.5rem"}} /> 
                {name}
            </div>
            <Button 
              className="btn"
              text={"입장하기"}
              href={link}
              style={{height: "3.14rem", width: "7rem"}}
              // 왜3rem은 안되지
            />
          </div>
        </WhiteBox>
    );
  }
  
  export default Enterlist;
  