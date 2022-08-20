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

  .button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // margin-top: -0.75rem;
  }
  .modalBtn {
    // width: inherit;
    width: 20.625rem;
    height: 3.5rem;
    font-weight: 700;
    font-size: 1.375rem;
  }

  .body__left {
    width: 16.5rem;
    height: 12.25rem;
    // left: 39.1875rem;
    // top: 22.125rem;
  }
  .body__left__elem {
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    // margin-right:2rem;
    margin-bottom: 0.75rem;
  }
  .body__left__elem > div {
    width: 3.9375rem;
    height: 1.8125rem;
  }
  .body__left__elem > input {
    background: #f3f3f3;
    border-radius: 0.25rem;
    width: 11.25rem;
    height: 2.5rem;
    border: none;
    margin-left: 1.375rem;
  }

  .body__right {
    width: 23.8125rem;
    height: 11.9375rem;
    // left: 57.6875rem;
    // top: 22.4375rem;
  }
  .body__right__elem {
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    margin-left: -2.9375rem;
    margin-bottom: 0.75rem;
  }
  .body__right__elem > div {
    width: 6.4375rem;
    height: 1.8125rem;
  }
  .body__right__elem > input {
    background: #f3f3f3;
    border-radius: 0.25rem;
    width: 16rem;
    height: 2.5rem;
    border: none;
    margin-left: 1.375rem;
  }

  .body__bottom {
    width: 42.375rem;
    height: 13.5625rem;
    // left: 39.125rem;
    // top: 36.5625rem;
    margin-top: -2.5rem;
  }
  .body__bottom__elem {
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
  }
  .body__bottom__elem > div {
    width: 4.1875rem;
    height: 1.8125rem;
  }
  .body__bottom__elem > input {
    background: #f3f3f3;
    border-radius: 0.25rem;
    border: none;
    width: 37.0625rem;
    height: 2.5rem;
    margin-left: 1.125rem;
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

const MembersModal = ({ visible, onClick }) => {
  return (
    <>
      <ModalOverlay visible={visible} />
      <StyledModal>
        <div className="content-area">
          <div className="header">
            <div>회원 정보</div>
            <TextBtn onClick={onClick}>
              <img src={importImg.modalClose} />
            </TextBtn>
          </div>
          <div className="body">
            <form className="body__left">
              <div className="body__left__elem">
                <div>이름</div>
                <input type="text"></input>
              </div>
              <div className="body__left__elem">
                <div>전화번호</div>
                <input type="text"></input>
              </div>
              <div className="body__left__elem">
                <div>생년월일</div>
                <input type="text"></input>
              </div>
            </form>
            <form className="body__right">
              <div className="body__right__elem">
                <div>팀/조</div>
                <input type="text"></input>
              </div>
              <div className="body__right__elem">
                <div>학교/소속</div>
                <input type="text"></input>
              </div>
              <div className="body__right__elem">
                <div>주소</div>
                <input type="text"></input>
              </div>
            </form>
          </div>
          <div className="body">
            <form className="body__bottom">
              <div className="body__bottom__elem">
                <div>한줄 소개</div>
                <input type="text"></input>
              </div>
              <div className="body__bottom__elem">
                <div>비고</div>
                <input type="text" style={{ height: 5 + 'rem' }}></input>
              </div>
            </form>
          </div>
          <div className="button">
            <EventButton text={'수정하기'} className="modalBtn"></EventButton>
            <EventButton text={'삭제하기'} className="modalBtn"></EventButton>
          </div>
        </div>
      </StyledModal>
    </>
  );
};


export default MembersModal;
