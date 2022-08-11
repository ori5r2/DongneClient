import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../styles/pallete';

const StyledCard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;

  margin-bottom: 2rem;
  margin-right: 1rem;

  width: 10.625rem;
  height: 12.5rem;

  font-family: 'Pretendard';
  font-size: 1rem;
  color: ${palette[5]};

  background: linear-gradient(180deg, #FAFAFA 0%, rgba(250, 250, 250, 0) 100%);
  box-shadow: inset 0px 0px 10px rgba(200, 200, 200, 0.1);
  
  // .UserImg{
  //   position: relative;

  // } 
  
  .UserName{
    position: relative;

    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    flex-wrap: nowrap;
  }

  .Description {
    position: relative;

    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    flex-wrap: nowrap;
  }

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

const MemberCard = ({ arr, to, history, ...rest }) => {
    const onClick = (e) => {
      if (to) {
        history.push(to);
      } else {
        history.push('/');
      }
    };

  return (
    <StyledCard onClick={onClick}>
      {/* todo: <Avatar/> */}
      <div className="UserName">{arr[0]}</div>
      <div className="Description">
        <div>{arr[1]}</div>
        <div>{arr[2]}</div>
      </div>
    </StyledCard>
  );
};

export default MemberCard;
