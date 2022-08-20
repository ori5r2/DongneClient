import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../styles/pallete';
import login_bell from '../styles/imgs/icon/nav_bell.png';
import user from '../styles/imgs/icon/nav_user.png';
import logIn from '../styles/imgs/icon/nav_log-in.png';
import Logo from '../styles/imgs/icon/Logo.png';

const StyledImg = styled.img`
  width: 1.7rem;
`;

const StyledNav = styled.nav`
  a {
    color: ${palette.CACACA};
    text-decoration: none;
    outline: none;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.5rem;
  }
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 3.75rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0rem 1rem 1.5rem -0.8rem rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 1.4375rem;
  border-bottom-left-radius: 1.4375rem;
  padding: 0.6rem 0.8rem;
  margin-bottom: 1rem;
  width: 1755px;
  height: 70px;

  font-family: 'Pretendard Medium';
  
  background-color: ${palette[0]};
  color: ${palette.CACACA};
  /* background: ${palette[3]}; */

  .logo {
    width: 35px;
    height: 35.21px;
    margin-left: 3rem;
  }
  .menus,
  .icons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 3rem;
  }
  .menus > li {
    padding: 0rem 1.5rem;
    margin-right: 3rem;
    list-style: none;
  }
  .icons > li {
    padding: 0rem 1rem;
    list-style: none;
  }
  .selected {
    color: ${palette[3]};
    font-weight: 800;
  }

  .Link {
    font-weight: 500;
    font-size: 12px;
    line-height: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: ${palette[5]};
  }
`;

const Navigator = ({ location }) => {
  return (
    <StyledNav>
      <ul className="menus icons">
        <li>
          <StyledImg className="logo" src={Logo}></StyledImg>
        </li>

        <li>
          <Link to="/admin/home" className={location === 0 ? 'selected' : null}>
            홈
          </Link>
        </li>

        <li>
          <Link
            to="/admin/members"
            className={location === 1 ? 'selected' : null}
          >
            회원 관리
          </Link>
        </li>

        <li>
          <Link to="/admin/home" className={location === 2 ? 'selected' : null}>
            활동 관리
          </Link>
        </li>
        <li>
          <Link
            to="/admin/finance"
            className={location === 3 ? 'selected' : null}
          >
            회계 관리
          </Link>
        </li>
        <li>
          <Link to="/community" className={location === 4 ? 'selected' : null}>
            커뮤니티
          </Link>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <Link to="/admin/home" className="Link">
            <StyledImg src={login_bell}></StyledImg>
            알림내역
          </Link>
        </li>
        <li>
          {/* {todo: human icon} */}
          <Link to="/admin/myPage" className="Link">
            <StyledImg src={user}></StyledImg>
            마이페이지
          </Link>
        </li>
        <li>
          {/* {todo: logout icon} */}
          <Link to="/admin/home" className="Link">
            <StyledImg src={logIn}></StyledImg>
            로그아웃
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navigator;
