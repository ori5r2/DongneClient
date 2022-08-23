import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackgroundTemplate from '../template/BackgroundTemplate';
import palette from '../styles/pallete';
import { useHistory } from 'react-router-dom';
import Logo from '../styles/imgs/icon/Logo.png';
import Enterlist from "./Enterlist";
import blueline from "../styles/imgs/icon/blueline.png";
import clubsData from '../clubsData';
import axios from 'axios';
import { API } from '../axiosConfig';
import getValue from '../../node_modules/lodash/_getValue';
import umcLogo from '../styles/imgs/icon/umcLogo.png';



const WhiteBox = styled.div`
  position: relative;
  width: 60vh;
  justify-content: center;
  text-align: center;
  font-family: 'Pretendard Regular';
  font-size: 1rem;
  color: ${palette[3]};
  margin-top: -5rem;

  .Logo{
    width: 2.5rem;
    padding-bottom:0.5rem;
  }
  .ExtraBold {
    font-family: 'Pretendard ExtraBold';
    font-size: 2.5rem;
  }

  .outline{
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .ClubCode{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const UserMainPageComponent = (props) => {
  const history = useHistory();
  const name = props.name;

  const jwtToken = sessionStorage.getItem('jwtToken');
  const userIdx = sessionStorage.getItem('userIdx');
  const [clubs,setClubs] = useState([]);

  useEffect(async () => {
    const result = await axios.get(`${API}/user/member/home?userIdx=${userIdx}`,{
      headers: {
        'x-access-token': jwtToken,
      }}
     )
    const value = result.data;
      if(value.isSuccess){
        console.log("API 적용 성공")
        setClubs(value.result);
      } else {
        alert(value.message);
      }
  },[]);

  

  return (
    <BackgroundTemplate style={{ zindex: 0 }}>
      <WhiteBox style={{ zIndex: 1 }}>
        <img src={Logo} className="Logo" style={{ marginBottom: '0.5rem'}}/>
        <div style={{ marginBottom: '1rem', fontSize:"1.1rem", color:"#2B78FF"}}>
          동아리 관리를 더욱 간편하게, 동네
        </div>
        <div className="ExtraBold" style={{ margin: '2rem' }}>
          {name} 님의 워크스페이스          {/* 추후에 이름부분 sesstionstrog */}
        </div>
        <div className='outline'>
          {clubs.length>0 && clubs.map((elem) => (
            <div>
              <Enterlist
                img={umcLogo}
                name={elem.clubName}
                link={elem.adminIdx}
              />
            </div>
          ))}
        </div>

        <div className='ClubCode'>
          <div>단체 코드를 받으셨나요?</div>
          <div style={{ fontWeight:"bold"}}>가입하기</div>
        </div>
        <img src={blueline} alt="" style={{width:"34rem"}} />
      </WhiteBox>
    </BackgroundTemplate>
  );
};

export default UserMainPageComponent;
