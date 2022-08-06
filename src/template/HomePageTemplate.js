import React from 'react';
import styled from 'styled-components';
import Navigator from '../components/Navigator';
import palette from '../styles/pallete';

const StyledBody = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomePageTemplate = ({ location, children }) => {
  return (
    <StyledBody>
      <Navigator location={location}></Navigator>
      {children}
      {/* <footer style={{ position: 'absolute', bottom: '0' }}>
        <StyledImg src={vector} />
      </footer> */}
    </StyledBody>
  );
};

export default HomePageTemplate;
