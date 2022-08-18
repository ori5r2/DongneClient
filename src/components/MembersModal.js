import React from 'react';
import styled from 'styled-components';
import palette from '../styles/pallete';
import Button from './Button';

const StyledModal = styled.div`
    position: fixed;
    width: 50.75rem;
    height: 38.75rem;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    background: #FFFFFF;
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
    margin_bottom:31px;
  }
  .body {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 160%;
    margin-top: 1.9rem;
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
  .modalBtn {
    width: inherit;
    width: 20.625rem;
    height: 3.5rem;
  }
  .body__left__elem {
    width: 3.9375rem;
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    margin-right:1.375rem;
  }
  .body__left__elem > input {
    background: #f3f3f3;
    border-radius: 4px;
    width: 11.25rem;
    height: 2.5rem;
    border: none;
    margin-right:2rem;
  }
  .body__right__elem {
    width: 6.4375rem;
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    margin-right:1.375rem;
  }
  .body__right__elem > input {
    background: #f3f3f3;
    border-radius: 4px;
    width: 16rem;
    height: 2.5rem;
    border: none;
  }
  .body__bottom__elem {
    width: 4.1875rem;
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    margin-right:1.125rem;
  }
  .body__bottom__elem > input {
    background: #f3f3f3;
    border-radius: 4px;
    border: none;
    width: 37.0625rem;
    height: 2.5rem;
  }
`;

const MembersModal = ({ onClick }) => {
  return (
    <StyledModal>
      <div className="content-area">
        <div className="header">
          <div>회원 정보</div>
          <button onClick={onClick}>x</button>
        </div>
        <div className="body">
          <form className="body__left">
            <div className="body__left__elem">
              <div>이름</div>
              <input type="text"></input>
            </div>
            <div className="body__left__elem">
              <div>팀/조</div>
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
              <div>개인 식별 코드</div>
              <input type="text"></input>
            </div>
            <div className="body__right__elem">
              <div></div>
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
              <input type="text"></input>
            </div>
            <Button text={'수정하기'} className="modalBtn"></Button>
            <Button text={'삭제하기'} className="modalBtn"></Button>
          </form>
        </div>
      </div>
    </StyledModal>
  );
};



// const MembersModal = (props) => {
//     const { open, close, header } = props;

//     return (
//         <div className={open ? 'openModal modal' : 'modal'}>
//             {open ? (
//                 <section>
//                     <header>
//                         {header}
//                         <button className="close" onClick={close}>
//                         &times;
//                         </button>
//                     </header>
//                     <main>{props.children}</main>
//                     <footer>
//                         <button className="close" onClick={close}>
//                         close
//                         </button>
//                     </footer>
//                 </section>
//             ) : null}
//         </div>
//     );
// };

export default MembersModal;