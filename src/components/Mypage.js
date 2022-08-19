import React, {useState, useEffect}  from 'react';
import Email from '../styles/imgs/icon/Email.png';
import Lock from '../styles/imgs/icon/Lock.png';
import person from '../styles/imgs/icon/person.png';
import profile from '../styles/imgs/icon/profile.png';
import Button from './Button';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import palette from '../styles/pallete';
import Register1 from './Register1';

const WhiteBox = styled.div`
    width: 85rem;
    height: 38rem;
    border-radius: 28px;
    padding-left: 3rem;
    padding-right: 3rem;
    font-size: 1rem;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(251, 251, 251, 0) 100%);
    border: 2px solid rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(40px);
    /* Note: backdrop-filter has minimal browser support */

    color: #333333; 

    .ExtraBold {
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    padding-bottom: 1rem;
    }

    .content{
        display: flex;
        flex-direction: row;
    }

    .part1{
        display: flex;
        flex-direction: column;
        padding-right: 5rem;
    }
    .part2{
        width: 50rem;
        display: flex;
        flex-direction: column;
    }

    & img {
        padding-right: 1rem;
        width: 1.5rem;
    }

    .Basic{
        display: flex;
        align-items: center;
        padding-bottom: 0.5rem;
    }

    .category{
        width: 6rem;
        font-family: 'Pretendard ExtraBold';
        padding-right: 3rem;
    }
    .information{
        font-size: 0.7rem;
        ::placeholder{
            color: #2D3B5C;
            padding: 0.5rem 0.8rem;
        }
    }

    .btnStlye{
        padding-left: 5rem;
    }

    .check{
        display: flex;
        flex-direction: row;
    }

    .twin{
        display: flex;
        flex-direction: row;
    }
`

function Mypage(props) {
    const history  = useHistory();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pw, setPw] = useState("");
    const [school, setSchool] = useState("");
    const [number, setNumber] = useState("");
    const [area, setArea] = useState("");
    const [address, setAddress] = useState("");
    const [intro, setIntro] = useState("");

    return (
        <WhiteBox> 
            <div className='frame'>
                <div className="ExtraBold" style={{ marginBottom: '0.5rem' }}>
                    <span style={{color: "#2B78FF", fontWeight: "bold"}}>가나다</span>님의 마이페이지
                </div>

                <div className='content'>
                    <div className='part1'>
                        프로필
                    </div>

                    <div className='part2'>
                        <div className='Basic'>
                            <span  className="category"> <img src={person} /> 이메일</span>
                            <input 
                                        onChange={(e)=>{
                                            setEmail(e.target.value);
                                        }}

                                        value={email}
                                        type={"text"} 
                                        className="information" 
                                        placeholder="abcdef@naver.com"
                                        style={{width: "33.5rem", 
                                                height: "2rem",
                                                backgroundColor:"#F3F3F3",
                                                border: "none",
                                                borderRadius: "3px",
                                        }}
                                    />
                            <div className='btnstyle'>
                                <Button
                                            text="수정하기"
                                            fullWidth
                                            history={history}
                                            // to={nextlink}
                                            style={{height: "2rem", width: "5rem", borderRadius: "3px", margin:"0"}}
                                        />
                            </div>
                        </div>

                        <div className='Basic'>
                            <span  className="category"> <img src={profile} />이름</span>
                            <input 
                                        onChange={(e)=>{
                                            setName(e.target.value);
                                        }}

                                        value={name}
                                        type={"text"} 
                                        className="information" 
                                        placeholder="동네"
                                        style={{width: "33.5rem", 
                                                height: "2rem",
                                                backgroundColor:"#F3F3F3",
                                                border: "none",
                                                borderRadius: "3px",
                                        }}
                                    />
                
                            <Button
                                        text="수정하기"
                                        fullWidth
                                        history={history}
                                        // to={nextlink}
                                        style={{height: "2rem", width: "5rem", borderRadius: "3px", margin:"0"}}
                                    />
                        </div>

                        <div className='Basic'>
                            <span  className="category"> <img src={Lock} />비밀번호</span>
                            <input 
                                        onChange={(e)=>{
                                            setPw(e.target.value);
                                        }}

                                        value={pw}
                                        type={"password"} 
                                        className="information" 
                                        placeholder="******"
                                        style={{width: "33.5rem", 
                                                height: "2rem",
                                                backgroundColor:"#F3F3F3",
                                                border: "none",
                                                borderRadius: "3px",
                                        }}
                                    />
                
                            <Button
                                        text="수정하기"
                                        fullWidth
                                        history={history}
                                        // to={nextlink}
                                        style={{height: "2rem", width: "5rem", borderRadius: "3px", margin:"0"}}
                                    />
                        </div>

                        <hr />

                        <div className='twin'>
                            < div className='Basic' style={{paddingRight:"3rem"}}>
                                <span className="category">학교</span>
                                <div className='check'>
                                    <input 
                                        onChange={(e)=>{
                                            setSchool(e.target.value);
                                        }}

                                        value={school}
                                        type={"text"} 
                                        className="information" 
                                        style={{width: "13rem", 
                                                height: "2rem",
                                                backgroundColor:"#F3F3F3",
                                                border: "none",
                                                borderRadius: "3px",
                                        }}
                                    />
                                </div>
                            </div>

                            <div className='Basic'>
                                <span className="category">전화번호</span>
                                <div className='check'>
                                    <input 
                                        onChange={(e)=>{
                                            setNumber(e.target.value);
                                        }}

                                        value={number}
                                        type={"number"} 
                                        className="information" 
                                        style={{width: "13rem", 
                                                height: "2rem",
                                                backgroundColor:"#F3F3F3",
                                                border: "none",
                                                borderRadius: "3px",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='Basic'>
                            <span className="category">단체 활동 지역</span>
                            <input 
                                onChange={(e)=>{
                                    setArea(e.target.value);
                                }}
                                value={area}
                                type={"text"} 
                                className="information" 
                                style={{width: "13rem", 
                                        height: "2rem",
                                        backgroundColor:"#F3F3F3",
                                        border: "none",
                                        borderRadius: "3px",
                                }}
                            />
                        </div>

                        <div className='Basic'>
                            <span className="category">주소</span>
                            <input 
                                onChange={(e)=>{
                                    setAddress(e.target.value);
                                }}
                                value={address}
                                type={"text"} 
                                className="information" 
                                style={{width: "38.5rem", 
                                        height: "2rem",
                                        backgroundColor:"#F3F3F3",
                                        border: "none",
                                        borderRadius: "3px",
                                }}
                            />
                        </div>

                        <div className='Basic'>
                            <span className="category">한줄 소개</span>
                            <textarea 
                                onChange={(e)=>{
                                    setIntro(e.target.value);
                                }}

                                value={intro}
                                type={"text"} 
                                style={{width: "38.5rem", 
                                        height: "7rem",
                                        backgroundColor: "#F3F3F3",
                                        border: "none",
                                        borderRadius: "3px",
                                        resize: "none"
                                }}
                            />
                        </div>

                        <Button 
                            text="개인 정보 수정하기"
                        />
                    </div>
                </div> 
            </div>
            
        </WhiteBox>
    );
  }
  
  export default Mypage;
  