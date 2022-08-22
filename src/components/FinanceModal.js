import React from 'react';
import styled from 'styled-components';
import palette from '../styles/pallete';
import EventButton from './EventButton';
import PropTypes from 'prop-types';
import importImg from '../styles/importImg';

const StyledModal = styled.div`
  position: fixed;
  width: 50.75rem;
  height: 38.75rem;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  background: #ffffff;
  box-shadow: 0rem 0rem 0.9375rem rgba(34, 42, 63, 0.6);
  border-radius: 0.625rem;

  .content-area {
    color: ${palette[5]};
    margin: 3rem 3.875rem;
    // margin: 2.625rem;
  }
  .header {
    font-size: 1.75rem;
    line-height: 160%;
    font-weight: 800;
    font-family: 'Pretendard Bold';
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.25rem;
  }
  .body {
    font-family: 'Pretendard Bold';
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 160%;
    // margin_top:1.9375rem;
    display: flex;
    align-items: center;
    // position: relative;
  }
  .body > form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
  }

  .body__bottom {
    width: 42.375rem;
    height: 13.5625rem;
    // left: 39.125rem;
    // top: 36.5625rem;
    margin-top: -2.5rem;
  }

`;

const TextBtn = styled.button`
  border: none;
  background-color: #11ffee00;
  cursor: pointer;
  padding: 0;
  font-family: 'Pretendard Bold';
  color: ${palette[3]};
  font-size: 1.25rem;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const FinanceModal = ({ visible, onClick }) => {
  return (
    <>
      <ModalOverlay visible={visible} />
      <StyledModal>
        <div className="content-area">
          <div className="header">
            <div>8월 22일</div>
            <TextBtn onClick={onClick}>
              <img src={importImg.modalClose} />
            </TextBtn>
          </div>
          <div className="body">
            
          </div>
          <div className="body">
            <form className="body__bottom">
             
            </form>
          </div>
        </div>
      </StyledModal>
    </>
  );
};


export default FinanceModal;
