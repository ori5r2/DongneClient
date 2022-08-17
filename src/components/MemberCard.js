import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../styles/pallete';

const StyledImg = styled.img`
  width: 5rem;
  margin: 0.5rem;
`;
.UserName`
  font-family: 'Pretendard Bold';
  font-size: 1rem
  color: ${palette[0]};
`;
const StyledDiv2 = styled.div`
  font-family: 'Pretendard Bold';
  font-size: 1rem
  color: ${palette[0]};
`;
const StyledCard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;

  margin-bottom: 1rem;

  width: 10.625rem;
  height: 12.5rem;

  font-family: 'Pretendard';
  color: ${palette[5]};

  background: linear-gradient(180deg, #FAFAFA 0%, rgba(250, 250, 250, 0) 100%);
  box-shadow: inset 0px 0px 10px rgba(200, 200, 200, 0.1);
  
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

const MemberCard = ({arr }) => {
  const onClick = (e) => {
    console.log("hi");
  };

  return (
    <StyledCard onClick={onClick}>
      {/* todo: <Avatar/> */}
      <div className='UserName'>{arr[0]}</div>
      <div className='Description'>
        <div>{arr[1]}</div>
        <div>{arr[2]}</div>
      </div>
    </StyledCard>
  );
};

export default MemberCard;
