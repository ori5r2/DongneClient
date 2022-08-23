import React, { useState, useEffect } from 'react';
import Lock from '../styles/imgs/icon/Lock.png';
import person from '../styles/imgs/icon/person.png';
import profile from '../styles/imgs/icon/profile.png';
import Button from './Button';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import line from '../styles/imgs/icon/line.png';
import setting from '../styles/imgs/icon/setting.png';

const WhiteBox = styled.div`
  width: 65rem;
  height: 42rem;
  border-radius: 1.75rem;
  font-size: 1rem;
  padding-top: 3rem;

  .frame {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text {
    font-size: 2rem;
    text-align: center;
    font-family: 'Pretendard Regular';
    display: flex;
    justify-content: flex-start;
    padding-bottom: 2rem;
  }

  .name {
    font-family: 'Pretendard Bold';
    color: #2b78ff;
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .part1 {
    display: flex;
    flex-direction: column;
    padding-right: 5rem;
    line-height: 200%;
  }

  .part2 {
    width: 50rem;
    display: flex;
    flex-direction: column;
  }

  .settingIcon {
    position: absolute;
    width: 2.8rem;
    top: 15rem;
    left: 30rem;
  }

  .icon {
    padding-right: 0.5rem;
    width: 2rem;
  }

  .between {
    padding-right: 1rem;
  }
  .Basic {
    display: flex;
    align-items: center;
    padding-bottom: 0.8rem;
  }

  .category {
    width: 7rem;
    font-family: 'Pretendard ExtraBold';
    display: flex;
    align-items: center;
    padding-bottom: 0.5rem;
  }

  .categoryItem {
    height: 2rem;
    background: #2b78ff;
    border-radius: 2.5rem;
    font-family: 'Pretendard';
    font-size: 1rem;
    color: #cee7f6;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    margin-right: 0.5rem;
  }

  .information {
    font-size: 0.9rem;
    padding-right: 0.5rem;
    outline: none;
    ::placeholder {
      color: #2d3b5c;
      padding: 0.5rem 0.8rem;
    }
  }

  .btnStlye {
    padding-left: 5rem;
  }

  .check {
    display: flex;
    flex-direction: row;
  }

  .twin {
    display: flex;
    flex-direction: row;
  }
`;
const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 10rem;
  background-color: #f7f7f7;
  border: 0.4rem solid white;
  box-shadow: rgba(100, 100, 111, 0.2) 0rem 0.4375rem 1.8125rem 0rem;
  border-radius: 50% 50% 50% 0%;
`;

function Mypage(props) {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pw, setPw] = useState('');
  const [school, setSchool] = useState('');
  const [number, setNumber] = useState('');
  const [birth, setBirth] = useState('');
  const [address, setAddress] = useState('');
  const [intro, setIntro] = useState('');
  const [change, setChange] = useState(false);

  // useEffect(() => {
  // }, [name, birth, school, phone, address, selfintro]);

  const handleApi = async () => {
    console.log(
      'email: ' + email,
      'name: ' + name,
      'pw: ' + pw,
      'school: ' + school,
      'number: ' + number,
      'birth: ' + birth,
      'address: ' + address,
      'intro: ' + intro,
    );

    if (change) {
      // 수정하기 api가 작동되야돼

      setChange(false);
    } else {
      // api가 작동 안 함
      setChange(true);
    }
  };

  const memberName = props.memberName;

  return (
    <WhiteBox>
      <div className="frame">
        <div className="text" style={{ marginBottom: '0.5rem' }}>
          <span className="name">{memberName}</span>님의 마이페이지
        </div>

        <div className="content">
          <div className="part1">
            <StyledAvatar
              style={{
                color: '#2B78FF',
                fontSize: '1.5rem',
                textAlign: 'center',
              }}
            >
              {/* todo: 프로필 사진 */}
              프로필
              <br />
              사진영역
            </StyledAvatar>
            <img className="settingIcon" src={setting} alt="" />
          </div>

          <div className="part2">
            <div className="Basic">
              <span className="category">
                {' '}
                <img src={person} alt="" className="icon" /> 이메일
              </span>
              <div className="between">
                <input
                  disabled
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  type={'text'}
                  className="information"
                  placeholder="abcdef@naver.com"
                  style={{
                    width: '41.5rem',
                    height: '2.5rem',
                    backgroundColor: '#F3F3F3',
                    border: 'none',
                    borderRadius: '0.1875rem',
                  }}
                />
              </div>
            </div>

            <div className="Basic">
              <span className="category">
                {' '}
                <img src={profile} alt="" className="icon" />
                이름
              </span>
              <div className="between">
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  disabled={!change}
                  value={name}
                  type={'text'}
                  className="information"
                  placeholder="동네"
                  style={{
                    width: '41.5rem',
                    height: '2.5rem',
                    backgroundColor: '#F3F3F3',
                    border: 'none',
                    borderRadius: '0.1875rem',
                  }}
                />
              </div>
            </div>

            <div className="Basic">
              <span className="category">
                {' '}
                <img src={Lock} alt="" className="icon" />
                비밀번호
              </span>
              <div className="between">
                <input
                  onChange={(e) => {
                    setPw(e.target.value);
                  }}
                  disabled
                  value={pw}
                  type={'password'}
                  className="information"
                  placeholder="******"
                  style={{
                    width: '41.5rem',
                    height: '2.5rem',
                    backgroundColor: '#F3F3F3',
                    border: 'none',
                    borderRadius: '0.1875rem',
                  }}
                />
              </div>
            </div>

            <img
              src={line}
              alt=""
              style={{
                width: '50rem',
                height: '0.3rem',
                paddingTop: '1rem',
                paddingBottom: '2rem',
              }}
            />

            <div className="twin">
              <div className="Basic" style={{ paddingRight: '1.5rem' }}>
                <span className="category">학교</span>
                <div className="check">
                  <input
                    onChange={(e) => {
                      setSchool(e.target.value);
                    }}
                    disabled={!change}
                    value={school}
                    type={'text'}
                    className="information"
                    style={{
                      width: '16rem',
                      height: '2.5rem',
                      backgroundColor: '#F3F3F3',
                      border: 'none',
                      borderRadius: '0.1875rem',
                    }}
                  />
                </div>
              </div>

              <div className="Basic">
                <span className="category">전화번호</span>
                <div className="check">
                  <input
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                    disabled={!change}
                    value={number}
                    type={'number'}
                    className="information"
                    style={{
                      width: '16rem',
                      height: '2.5rem',
                      backgroundColor: '#F3F3F3',
                      border: 'none',
                      borderRadius: '0.1875rem',
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="Basic">
              <span className="category">생년월일</span>
              <input
                onChange={(e) => {
                  setBirth(e.target.value);
                }}
                disabled={!change}
                value={birth}
                type={'number'}
                className="information"
                style={{
                  width: '16rem',
                  height: '2.5rem',
                  backgroundColor: '#F3F3F3',
                  border: 'none',
                  borderRadius: '0.1875rem',
                }}
              />
            </div>

            <div className="Basic">
              <span className="category">주소</span>
              <input
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                disabled={!change}
                value={address}
                type={'text'}
                className="information"
                style={{
                  width: '41.5rem',
                  height: '2.5rem',
                  backgroundColor: '#F3F3F3',
                  border: 'none',
                  borderRadius: '0.1875rem',
                }}
              />
            </div>

            <div className="Basic">
              <span className="category">한줄 소개</span>
              <textarea
                onChange={(e) => {
                  setIntro(e.target.value);
                }}
                disabled={!change}
                value={intro}
                type={'text'}
                style={{
                  width: '41rem',
                  height: '7rem',
                  paddingRight: ' 1rem',
                  backgroundColor: '#F3F3F3',
                  border: 'none',
                  borderRadius: '0.1875rem',
                  fontFamily: 'Pretendard Regular',
                  fontSize: '0.9rem',
                  resize: 'none',
                }}
              />
            </div>

            <div
              onClick={() => {
                handleApi();
              }}
            >
              <Button
                text={change ? '저장하기' : '개인 정보 수정하기'}
                style={{
                  borderRadius: '4px',
                  width: '49.3rem',
                  marginTop: '1.5rem',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </WhiteBox>
  );
}

export default Mypage;
