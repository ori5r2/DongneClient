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
  
  .title {
    font-size: 1.5rem;
    margin-top: 0.625rem;
  }
  .card__header {
    box-sizing: border-box;
    padding-top: 1.75rem;
    padding-left: 1.75rem;
  }

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

  .UserCode {
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

const MembersCard = ({ UserName, onClick, UserCode, UserTeam, img_src, to, history, ...rest }) => {


  return (
    <StyledCard {...rest}>
      <div className="card__header">
        <div className="UserName">{UserName}</div>
        <div className="UserCode">{UserCode}</div>
        <div className="UserTeam">{UserTeam}</div>
      </div>
    </StyledCard>
  );
};

export default MembersCard;