import React, {useState, useEffect}  from 'react';
import Email from '../styles/imgs/icon/Email.png';
import Lock from '../styles/imgs/icon/Lock.png';
import Button from './Button';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import palette from '../styles/pallete';

const WhiteBox = styled.div`
    width: 35rem;
    height: 28rem;
    background-color: #ffffff;
    border-radius: 10px;
    padding-left: 3rem;
    padding-right: 3rem;
    font-size: 1rem;

    color: #2D3B5C; 

    & img {
        padding-right: 0.5rem;
        width: 1.5rem;
    }

    .inputInformation{
        display: flex;
        align-items: center;
        font-weight: bold;
        padding-bottom: 0.5rem;
    }

    .information{
        font-size: 0.7rem;
        ::placeholder{
            color: #AAAAAA;
        }
    }

    .outline{
        padding-bottom: 1rem;
        padding-right: 1.8rem;
    }

    .check{
        display: flex;
        flex-direction: row;
    }

    .search{
        padding-left: 0.5rem;
    }
    
    .bigoutline{
        padding-top: 1.5rem;
    }

    .twin{
        display: flex;
        flex-direction: row;
    }
`


function AdminRegister2(props) {
    const history  = useHistory();
    const nextlink = props.nextlink;

    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [school, setSchool] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [selfintro, setSelfintro] = useState("");
    const [Ok, setOk] = useState(false);


    useEffect(() => {
        if (name && birth && school && phone && address && selfintro) {
            setOk(true);
        } else {
          setOk(false);
        }
        
        if (name && birth && school && phone &&address) {
            setOk(true);
        } else {
          setOk(false);
        }
      }, [name, birth, school, phone, address, selfintro]);

    const nextpage = props.nextpage;
    const presentpage = props.presentpage;


    return (
        <WhiteBox> 
            <div className='bigoutline'>
                <div className='twin'>
                    <div className='outline'>
                        <div className='inputInformation'>
                            <img src={Email} alt=""/> 
                                이름&nbsp; <span style={{ color: palette[3] }}>(필수)</span>
                        </div>
                        <div className='check'>
                            <input 
                                onChange={(e)=>{
                                    setName(e.target.value);
                                }}

                                value={name}
                                type={"text"} 
                                className="information" 
                                placeholder="예) 김동네"
                                style={{width: "16.4rem", 
                                        height: "2rem",
                                        backgroundColor:"#F3F3F3",
                                        border: "none",
                                        borderRadius: "3px",
                                }}
                            />
                        </div>
                    </div>

                    <div className='outline'>
                        <div className='inputInformation'>
                            <img src={Email} alt=""/> 
                                생년월일&nbsp; <span style={{ color: palette[3] }}>(필수)</span>
                        </div>
                        <div className='check'>
                            <input 
                                onChange={(e)=>{
                                    setBirth(e.target.value);
                                }}

                                value={birth}
                                type={"number"} 
                                className="information" 
                                placeholder="ex) 2001.01.01"
                                style={{width: "16.4rem", 
                                        height: "2rem",
                                        backgroundColor:"#F3F3F3",
                                        border: "none",
                                        borderRadius: "3px",
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className='twin'>
                    <div className='outline'>
                        <div className='inputInformation'>
                            <img src={Lock} alt=""/> 
                                학교&nbsp; <span style={{ color: palette[3] }}>(필수)</span>
                        </div>
                        <div className='check'>
                            <input 
                                onChange={(e)=>{
                                    setSchool(e.target.value);
                                }}

                                value={school}
                                type={"text"} 
                                className="information" 
                                placeholder="재학중인 학교를 입력해주세요."
                                style={{width: "11rem", 
                                        height: "2rem",
                                        backgroundColor:"#F3F3F3",
                                        border: "none",
                                        borderRadius: "3px",
                                }}
                            />
                            <div className='search'>
                            <Button
                                text="학교검색"
                                fullWidth
                                history={history}
                                to={nextlink}
                                style={{height: "2.2rem", width: "5rem", borderRadius: "3px"}}
                            />
                        </div>
                        </div>
                    </div>
                    <div className='outline'>
                        <div className='inputInformation'>
                            <img src={Email} alt=""/> 
                                전화번호&nbsp; <span style={{ color: palette[3] }}>(필수)</span>
                        </div>
                        <div className='check'>
                            <input 
                                onChange={(e)=>{
                                    setPhone(e.target.value);
                                }}

                                value={phone}
                                type={"number"} 
                                className="information" 
                                placeholder="ex) 010-xxxx-xxxx"
                                style={{width: "16.4rem", 
                                        height: "2rem",
                                        backgroundColor:"#F3F3F3",
                                        border: "none",
                                        borderRadius: "3px",
                                }}
                            />
                        </div>
                    </div>
                </div>
                     <div className='inputInformation'>
                        <img src={Lock} alt=""/> 
                            주소&nbsp; <span style={{ color: palette[3] }}>(필수)</span>
                    </div>
                    <div className='check'>
                        <input 
                            onChange={(e)=>{
                                setAddress(e.target.value);
                            }}
                            value={address}
                            type={"text"} 
                            className="information" 
                            style={{width: "29rem", 
                                    height: "2rem",
                                    backgroundColor:"#F3F3F3",
                                    border: "none",
                                    borderRadius: "3px",
                            }}
                        />
                        <div className='search'>
                            <Button
                                text="주소검색"
                                fullWidth
                                history={history}
                                to={nextlink}
                                style={{height: "2.2rem", width: "6rem", borderRadius: "3px"}}
                            />
                        </div>
                    </div>
                    
                

                <div className='outline'>
                    <div className='inputInformation'>
                        <div>한 줄 소개 &nbsp; <span style={{ color: "#AAAAAA" }}>(선택)</span></div>
                    </div>
                    <div>
                        <textarea 
                            onChange={(e)=>{
                                setSelfintro(e.target.value);
                            }}

                            value={selfintro}
                            type={"text"} 
                            style={{width: "34.8rem", 
                                    height: "3.5rem",
                                    backgroundColor: "#F3F3F3",
                                    border: "none",
                                    borderRadius: "3px",
                                    resize: "none"
                            }}
                        />
                    </div>
                </div>

            {Ok ? (
                    <Button
                        text="가입 완료하기"
                        fullWidth
                        history={history}
                        to={nextpage}
                        style={{height: "2.5rem", borderRadius: "3px"}}
                    />
                ) : ( 
                    <Button
                        text="가입 완료하기"
                        fullWidth
                        history={history}
                        to={presentpage}
                        style={{height: "2.5rem", borderRadius: "3px"}}
                    />
            ) }
        </div>
        </WhiteBox>
    );
  }
  
  export default AdminRegister2;
  