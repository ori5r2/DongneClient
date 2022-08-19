import React, {useState, useEffect}  from 'react';
import Lock from '../styles/imgs/icon/Lock.png';
import person from '../styles/imgs/icon/person.png';
import profile from '../styles/imgs/icon/profile.png';
import Button from './Button';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import line from '../styles/imgs/icon/line.png'


const WhiteBox = styled.div`
    width: 65rem;
    height: 42rem;
    border-radius: 28px;
    font-size: 1rem;
    

    .frame{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .text{
        font-size: 2rem;
        text-align: center;
        font-family: 'Pretendard Regular';
        display: flex;
        justify-content: flex-start;
        padding-bottom: 2rem;
    }

    .name{
        font-family: 'Pretendard Bold';
        color: #2B78FF;
    }

    .content{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .part1{
        display: flex;
        flex-direction: column;
        padding-right: 5rem;
        line-height: 200%;
    }
    .part2{
        width: 50rem;
        display: flex;
        flex-direction: column;
    }

    .icon{
        padding-right: 0.5rem;
        width:2rem;
    }

    .between{
        padding-right: 1rem;
    }
    .Basic{
        display: flex;
        align-items: center;
        padding-bottom: 0.8rem;
    }

    .category{
        width: 7rem;
        font-family: 'Pretendard ExtraBold';
        padding-right: 3rem;
        display: flex;
        align-items: center;
        padding-bottom: 0.5rem;
    }

    .categoryItem{
        height: 2rem;
        background: #2B78FF;
        border-radius: 40px;
        font-family: 'Pretendard';
        font-size: 1rem;
        color: #CEE7F6;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0 1rem;
        margin-right: 0.5rem;
    }

    .information{
        font-size: 0.9rem;
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
const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 10rem;
  background-color: #f7f7f7;
  border: 0.4rem solid white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 50% 50% 50% 0%;
`;

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
                <div className="text"style={{ marginBottom: '0.5rem' }}>
                    <span className='name'>가나다</span>님의 마이페이지
                </div>

                <div className='content'>
                    <div className='part1'>
                        <StyledAvatar style={{color:"#2B78FF", fontSize:"1.5rem", textAlign:"center"}}>
                            {/* todo: 프로필 사진 */}
                            프로필<br />사진영역
                        </StyledAvatar>
                    </div>

                    <div className='part2'>
                        <div className='Basic'>
                            <span  className="category"> <img src={person} alt="" className='icon' /> 이메일</span>
                            <div className='between'>
                                <input 
                                        onChange={(e)=>{
                                            setEmail(e.target.value);
                                        }}

                                        value={email}
                                        type={"text"} 
                                        className="information" 
                                        placeholder="abcdef@naver.com"
                                        style={{width: "33.5rem", 
                                                height: "2.5rem",
                                                backgroundColor:"#F3F3F3",
                                                border: "none",
                                                borderRadius: "3px",
                                            }}
                                    />
                            </div>
                            <div className='btnstyle'>
                                <Button
                                        text="수정하기"
                                        fullWidth
                                        history={history}
                                        // to={nextlink}
                                        style={{height: "2.5rem", width: "5rem", borderRadius: "3px", margin:"0"}}
                                    />
                            </div>
                        </div>

                        <div className='Basic'>
                            <span  className="category"> <img src={profile} alt="" className='icon' />이름</span>
                            <div className='between'>
                                <input 
                                    onChange={(e)=>{
                                        setName(e.target.value);
                                    }}

                                    value={name}
                                    type={"text"} 
                                    className="information" 
                                    placeholder="동네"
                                    style={{width: "33.5rem", 
                                            height: "2.5rem",
                                            backgroundColor:"#F3F3F3",
                                            border: "none",
                                            borderRadius: "3px",
                                    }}
                                />
                            </div>
                
                            <Button
                                    text="수정하기"
                                    fullWidth
                                    history={history}
                                    // to={nextlink}
                                    style={{height: "2.5rem", width: "5rem", borderRadius: "3px", margin:"0"}}
                            />
                        </div>

                        <div className='Basic'>
                            <span  className="category"> <img src={Lock} alt="" className='icon' />비밀번호</span>
                            <div className='between'>
                                <input 
                                    onChange={(e)=>{
                                        setPw(e.target.value);
                                    }}

                                    value={pw}
                                    type={"password"} 
                                    className="information" 
                                    placeholder="******"
                                    style={{width: "33.5rem", 
                                            height: "2.5rem",
                                            backgroundColor:"#F3F3F3",
                                            border: "none",
                                            borderRadius: "3px",
                                    }}
                                />
                            </div>

                            <Button
                                        text="수정하기"
                                        fullWidth
                                        history={history}
                                        // to={nextlink}
                                        style={{height: "2.5rem", width: "5rem", borderRadius: "3px", margin:"0"}}
                                    />
                        </div>
                        
                        
                        <img src={line} alt="" style={{width:"50rem", height:"0.3rem", paddingTop:"1rem", paddingBottom:"1rem"}}/>


                        <div className='Basic'>
                            <span className="category">단체 카테고리</span>
                            <div className='categoryItem'>#IT</div>
                            <div className='categoryItem'>연합동아리</div>
                        </div>

                        <div className='twin'>
                            < div className='Basic' style={{paddingRight:"1.5rem"}}>
                                <span className="category">학교</span>
                                <div className='check'>
                                    <input 
                                        onChange={(e)=>{
                                            setSchool(e.target.value);
                                        }}

                                        value={school}
                                        type={"text"} 
                                        className="information" 
                                        style={{width: "14rem", 
                                                height: "2.5rem",
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
                                        style={{width: "14rem", 
                                                height: "2.5rem",
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
                                style={{width: "14rem", 
                                        height: "2.5rem",
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
                                style={{width: "41.5rem", 
                                        height: "2.5rem",
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
                                style={{width: "41.5rem", 
                                        height: "5rem",
                                        backgroundColor: "#F3F3F3",
                                        border: "none",
                                        borderRadius: "3px",
                                        resize: "none"
                                }}
                            />
                        </div>
                         
                        <Button 
                            text="단체 정보 수정하기"
                            style={{
                                borderRadius:"4px",
                                width:"50.1rem",
                                marginTop:"1.5rem"
                            }}
                        />
                    </div>
                </div> 
            </div>
            
        </WhiteBox>
    );
  }
  
  export default Mypage;
  