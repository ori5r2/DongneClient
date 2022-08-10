import React from 'react';
import styled from 'styled-components';
import Navigator from '../components/Navigator';
import palette from '../styles/pallete';

const StyledBody = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBox = styled.div`
  width: max-content;
  height: auto;
  width: auto;
  position: absolute;
  top: 4.6rem;
  left: 0;
`;

const HomePageTemplate = ({ location, children }) => {
  return (
    <StyledBody>
      <Navigator
        location={location}
        style={{ position: 'relative', zIndex: 1 }}
      ></Navigator>
      <StyledBox>{children}</StyledBox>
      {/* <footer style={{ position: 'absolute', bottom: '0' }}>
        <StyledImg src={vector} />
      </footer> */}
    </StyledBody>
  );
};

export default HomePageTemplate;
