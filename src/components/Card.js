import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../styles/pallete';
import importImg from '../styles/importImg';

const StyledCard = styled.div`
  position: relative;
  width: 20rem;
  height: 13.75rem;
  background-color: wheat;
  border-radius: 1rem;
  font-family: 'Pretendard Bold';
  color: #ffffff;
  font-size: 1.125rem;
  filter: drop-shadow(0px 0px 20px rgba(34, 42, 63, 0.25));
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${importImg.cardBack});
  background-size: cover;
  .title {
    font-size: 1.5rem;
    margin-top: 0.625rem;
  }
  .card__header {
    box-sizing: border-box;
    padding-top: 1.75rem;
    padding-left: 1.75rem;
  }
  .card__body {
    display: flex;
    justify-content: space-between;
    width: inherit;
    height: 40%;
    position: absolute;
    bottom: 0;
  }
  .card__body:hover {
    background: linear-gradient(0deg, #2b78ff 0%, rgba(43, 120, 255, 0) 100%);
  }
  .card__button {
    font-family: 'Pretendard Medium';
    font-size: 1.125rem;
    border: none;
    background: transparent;
    color: transparent;
    width: 50%;
  }
  .card__button:hover {
    transition: all 0.4s ease-in-out;
    background: linear-gradient(0deg, #2b78ff 0%, rgba(43, 120, 255, 0) 100%);
    cursor: pointer;
    color: #ffffff;
  }
`;

const Card = ({ subTitle, title, img_src, to, history, ...rest }) => {
  const onClick = (e) => {
    if (to) {
      history.push(to);
    } else {
      history.push('/');
    }
  };

  return (
    <StyledCard {...rest} onClick={onClick}>
      <div className="card__header">
        <div className="subTitle">{subTitle}</div>
        <div className="title">{title}</div>
      </div>
      <div className="card__body">
        <button className="card__button">자세히 보기</button>
        <button className="card__button">출결 현황 보기</button>
      </div>
    </StyledCard>
  );
};
export default Card;
