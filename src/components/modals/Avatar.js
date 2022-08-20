import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../styles/pallete';
import importImg from '../../styles/importImg';

const StyledCard = styled.button`
  box-sizing: border-box;
  width: 3.75rem;
  height: 7rem;

  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  font-family: 'Pretendard Medium';
  color: ${palette[5]};

  /* background: linear-gradient(180deg, #fafafa 0%, rgba(250, 250, 250, 0) 100%); */
  /* box-shadow: inset 0rem 0rem 0.625rem rgba(200, 200, 200, 0.1); */

  .UserImg {
    box-sizing: border-box;
    width: 3.75rem;
    height: 3.75rem;
  }

  .UserName {
    font-family: 'Pretendard Medium';
    width: inherit;
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  .UserTeam {
    width: inherit;
    font-size: 0.75rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  img {
    border-radius: 50%;
    border: 0.0625rem solid ${palette[3]};
  }
`;

const Avatar = ({
  UserName,
  onClick,
  UserCode,
  UserTeam,
  img_src,
  to,
  history,
  ...rest
}) => {
  return (
    <StyledCard type="button" onClick={onClick} {...rest}>
      <div className="UserImg">
        <img src={importImg.membersProfile} />
      </div>
      <span className="UserName">{UserName}</span>
      <span className="UserTeam">{UserTeam}</span>
    </StyledCard>
  );
};

export default Avatar;
