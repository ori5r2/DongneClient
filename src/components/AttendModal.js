import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../styles/pallete';
import importImg from '../styles/importImg';
import Button from './Button';

const StyledModal = styled.div`
  position: fixed;
  width: 75rem;
  height: 40.625rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(34, 42, 63, 0.6);
  border-radius: 10px;
  .content-area {
    color: ${palette[5]};
    margin: 2.625rem;
  }
  .header {
    font-size: 1.75rem;
    font-family: 'Pretendard Bold';
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .body {
    margin-top: 1.9rem;
    display: flex;
  }
  .body > form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
  }
  .modalBtn {
    width: inherit;
  }
  .body__left__elem {
    font-size: 1.125rem;
    display: flex;
    align-items: center;
  }
  .body__Left__elem > input {
    background: #f3f3f3;
    border-radius: 4px;
  }
`;

const AttendModal = ({ title, onClick }) => {
  return (
    <StyledModal>
      <div className="content-area">
        <div className="header">
          <div>{title}</div>
          <button onClick={onClick}>x</button>
        </div>
        <div className="body">
          <form className="body__left">
            <div className="body__left__elem">
              <div>카테고리</div>
              <input type="text"></input>
            </div>
            <div className="body__left__elem">
              <div>항목</div>
              <input type="text"></input>
            </div>
            <div className="body__left__elem">
              <div>내용</div>
              <input type="text"></input>
            </div>
            <Button text={'수정하기'} className="modalBtn"></Button>
          </form>
          <form className="body__left">
            <div>
              <div>참여하기</div>
              <input type="text"></input>
            </div>
            <Button text={'삭제하기'} className="modalBtn"></Button>
          </form>
        </div>
      </div>
    </StyledModal>
  );
};

export default AttendModal;
