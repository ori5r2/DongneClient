import React from 'react';
import BackgroundTemplate from '../../template/BackgroundTemplate';
import styled from 'styled-components';
import AdminMypage from '../../components/AdminMypage';
import { Link } from 'react-router-dom';
import HomePageTemplate from '../../template/HomePageTemplate';


const WhitBox = styled.div`
    box-sizing: border-box;   
    position: absolute; 
    width: 110rem;
    height: 45rem;
    left: 4rem;
    top: 3rem;

    background: linear-gradient(180deg, #FFFFFF 0%, rgba(251, 251, 251, 0) 100%);
    border: 2px solid rgba(255, 255, 255, 0.6); 
    border-radius: 28px;
    backdrop-filter: blur(40px);
/* Note: backdrop-filter has minimal browser support */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;


const UserRegisterCheck3 = () => {
  return (
    <BackgroundTemplate style={{ zIndex: 0 }}>
    <HomePageTemplate style={{ zIndex: 1 }}>
        <WhitBox style={{ zIndex: 2 }}>
            <AdminMypage />
     </WhitBox>
    </HomePageTemplate>
    </BackgroundTemplate>
  );
};

export default UserRegisterCheck3;