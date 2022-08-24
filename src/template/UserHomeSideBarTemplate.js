import React, { useState } from 'react';
import palette from '../styles/pallete';
import styled from 'styled-components';
import copy from '../styles/imgs/icon/home_file-copy.png';
import ProfileImg from '../styles/imgs/icon/ProfileImg.png';

const StyledTag = styled.div`
  background-color: #2b78ff;
  padding: 0.8rem 1rem;
  border-radius: 4rem;
  font-size: 1rem;
  color: ${palette[1][0]};
  margin-right: 0.7rem;
`;

const StyledDiv = styled.div`
  position: relative;
  width: auto;
  height: 100%;

  .side__home__body {
    position: relative;
    left: 30.68rem;
  }
`;

const StyledAvatar = styled.div`
  & img {
    object-fit: cover;
    height: 6rem;
    width: 6rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 10rem;
  background-color: #f7f7f7;
  border: 0.4rem solid white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 50% 50% 50% 0%;
  /* display: inline-block; */
`;

const StyledSideBar = styled.div`
  margin-left: 3.93rem;
  margin-top: 8.8125rem;
  border-right: 0.01px solid ${palette[1][3]};
  position: fixed;
  left: 0;
  top: 0;
  width: 30.6875rem;
  height: 100vh;

  font-size: 1.4rem;
  font-family: 'Pretendard Regular';

  .greeting {
    font-family: 'Pretendard Medium';
    font-size: 3.25rem;
    margin-top: 3rem;
  }
  .name {
    font-family: 'Pretendard Bold';
    color: ${palette[3]};
  }
  .description {
    font-size: 18px;
    margin-top: 2rem;
  }
  .invite {
    font-size: 18px;
    margin-top: 2rem;
    color: ${palette[3]};
  }
  .tags {
    margin-top: 5rem;
    display: flex;
  }
  .properties {
    margin-top: 4rem;
  }
  .imageBtn2 {
    border: none;
    background-color: #11ffee00;
    cursor: pointer;
  }
  .sidebar__contentArea {
    width: 21.25rem;
  }
`;

const UserHomeSideBarTemplate = ({ children }) => {
  const [data, setData] = useState('asdlkln123135487as86846');
  const handleClick = (e) => {
    navigator.clipboard.writeText(data);
    console.log(data);
  };
  return (
    <StyledDiv>
      <StyledSideBar>
        <div className="sidebar__contentArea">
          <StyledAvatar>
            {/* todo: 프로필 사진 */}
            <img src={ProfileImg} alt="profile" />
          </StyledAvatar>
          <div>
            <div className="greeting">
              <div>안녕하세요,</div>
              <span className="name">동네</span>
              <span> 님!</span>
            </div>
            <h4 className="description">
              University MakeUs Challenge(이하 UMC)는 앱 런칭에 도전하는 대학생
              IT 연합동아리입니다.
            </h4>

            <footer>
              <ul className="tags">
                <StyledTag>#IT</StyledTag>
                <StyledTag>#연합동아리</StyledTag>
              </ul>
              <ul className="properties">
                <li>
                  {/* todo: icon */}
                  동네 (총 인원 40명)
                </li>
                <li>
                  {/* todo: icon */}
                  동네 (총 인원 40명)
                </li>{' '}
                <li>
                  {/* todo: icon */}
                  동네 (총 인원 40명)
                </li>{' '}
                <li>
                  {/* todo: icon */}
                  동네 (총 인원 40명)
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </StyledSideBar>
      <div className="side__home__body">{children}</div>
    </StyledDiv>
  );
};

export default UserHomeSideBarTemplate;
