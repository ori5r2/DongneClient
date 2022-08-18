import React from 'react';
import styled from 'styled-components';
import palette from '../styles/pallete';
import Button from './Button';

const StyledModal = styled.div`
    position: fixed;
    width: 812px;
    height: 620px;
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
  .body__left__elem > input {
    background: #f3f3f3;
    border-radius: 4px;
  }
  .body__right__elem {
    font-size: 1.125rem;
    display: flex;
    align-items: center;
  }
  .body__right__elem > input {
    background: #f3f3f3;
    border-radius: 4px;
  }

  // .modal button {
  //   outline: none;
  //   cursor: pointer;
  //   border: 0;
  // }

  // .modal > section {
  //   width: 90%;
  //   max-width: 450px;
  //   margin: 0 auto;
  //   border-radius: 0.3rem;
  //   background-color: #fff;
  //   /* 팝업이 열릴때 스르륵 열리는 효과 */
  //   animation: modal-show 0.3s;
  //   overflow: hidden;
  // }

  // .modal > section > header {
  //   position: relative;
  //   padding: 16px 64px 16px 16px;
  //   background-color: #f1f1f1;
  //   font-weight: 700;
  // }

  // .modal > section > header button {
  //   position: absolute;
  //   top: 15px;
  //   right: 15px;
  //   width: 30px;
  //   font-size: 21px;
  //   font-weight: 700;
  //   text-align: center;
  //   color: #999;
  //   background-color: transparent;
  // }

  // .modal > section > main {
  //   padding: 16px;
  //   border-bottom: 1px solid #dee2e6;
  //   border-top: 1px solid #dee2e6;
  // }

  // .modal > section > footer {
  //   padding: 12px 16px;
  //   text-align: right;
  // }

  // .modal > section > footer button {
  //   padding: 6px 12px;
  //   color: #fff;
  //   background-color: #6c757d;
  //   border-radius: 5px;
  //   font-size: 13px;
  // }

  // .modal.openModal {
  //   display: flex;
  //   align-items: center;
  //   /* 팝업이 열릴때 스르륵 열리는 효과 */
  //   animation: modal-bg-show 0.3s;
  // }
  // @keyframes modal-show {
  //   from {
  //     opacity: 0;
  //     margin-top: -50px;
  //   }
  //   to {
  //     opacity: 1;
  //     margin-top: 0;
  //   }
  // }
  // @keyframes modal-bg-show {
  //   from {
  //     opacity: 0;
  //   }
  //   to {
  //     opacity: 1;
  //   }
  // }

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
            <div className="body__right_elem">
              <div>개인 식별 코드</div>
              <input type="text"></input>
            </div>
            <div className="body__right_elem">
              <div></div>
            </div>
            <div className="body__right_elem">
              <div>학교/소속</div>
              <input type="text"></input>
            </div>
            <div className="body__right_elem">
              <div>주소</div>
              <input type="text"></input>
            </div>
          </form>
          <form className="body__bottom">
            <div className="body__bottom_elem">
              <div>한줄 소개</div>
              <input type="text"></input>
            </div>
            <div className="body__bottom_elem">
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