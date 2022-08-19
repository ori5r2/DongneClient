import React, {useState, useEffect}  from 'react';
import Button from '../components/Button';
import styled from 'styled-components';


const WhiteBox = styled.div`

    display: flex;
    justify-content: center;
    .list{
        display: flex;
        flex-direction: row;
    }
    .Clubname{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 25rem;
        height: 3rem;
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
              style={{height: "3.14rem", width: "7rem"}}
              // 왜3rem은 안되지
            />
          </div>
        </WhiteBox>
    );
  }
  
  export default Enterlist;
  