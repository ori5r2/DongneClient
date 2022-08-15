import React from 'react';
import BackgroundTemplate from '../../template/BackgroundTemplate';
import Button from '../../components/Button';
import styled from 'styled-components';
import palette from '../../styles/pallete';
import { Link } from 'react-router-dom';

const WhiteBox = styled.div`
  position: relative;
  width: 50vh;

  text-align: center;
  font-family: 'Pretendard Regular';
  font-size: 1rem;
  color: ${palette[3]};
  //width: 33%;

  .ExtraBold {
    font-family: 'Pretendard ExtraBold';
    font-size: 2rem;
  }

  .Logo {
    font-family: 'Pretendard Medium';
    color: #3333;
    margin-bottom: 2rem;
  }
  .Link {
    color: ${palette[3]};
    margin-left: 0.5rem;
  }
  .styledForm {
    flex-direction: column;
    display: flex;
    text-align: center;
  }
  .styledForm > input {
    margin-bottom: 1rem;

    border: none;
    border-bottom: 0.01rem gray solid;
    box-sizing: border-box;
    outline: none;
    height: 3rem;
  }
`;

const UserLoginPage = () => {
  return (
    <div>
      <BackgroundTemplate style={{ zIndex: 0 }}>
        <WhiteBox style={{ zIndex: 1 }}>
          <div className="Logo">LOGO</div>
          <div style={{ marginBottom: '2rem' }}>
            동아리 관리를 더욱 간편하게, 동네
          </div>
          <div className="ExtraBold" style={{ marginBottom: '2rem' }}>
            USER-LOG-IN
          </div>
          <div>
            <form className="styledForm">
              <input type="text" placeholder="이메일"></input>
              <input type="text" placeholder="비밀번호"></input>
              <Button
                text="로그인"
                img_src={null}
                fullWidth
                history={null}
                to="/user/login"
                style={{ marginBottom: '1rem' }}
              />
            </form>
            <div>
              <Link to="/user/login" className="Link">
                회원가입
              </Link>
              <Link to="/user/login" className="Link">
                비밀번호 찾기
              </Link>
            </div>
          </div>
        </WhiteBox>
      </BackgroundTemplate>
    </div>
  );
};

export default UserLoginPage;
