import React, {useState, useEffect}  from 'react';
import Email from '../styles/imgs/icon/Email.png';
import Lock from '../styles/imgs/icon/Lock.png';
import Button from '../components/Button';
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
    }

    .check{
        display: flex;
        flex-direction: row;
    }

    .idcheck{
        padding-left: 1rem;
    }
    
    .bigoutline{
        padding-top: 1.5rem;
    }
`


function Register1(props) {
    const history  = useHistory();
    const nextlink = props.nextlink;

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwcheck, setPwcheck] = useState("");
    const [email, setEmail] = useState("");
    const [Ok, setOk] = useState(false);


    useEffect(() => {
        if (id && pw && pwcheck && email) {
            if ( pw === pwcheck) {
                setOk(true);
            } else {
                setOk(false);
            }
        } else {
          setOk(false);
        }
        
        if (id && pw && pwcheck) {
            if ( pw === pwcheck) {
                setOk(true);
            } else {
                setOk(false);
            }
        } else {
          setOk(false);
        }
      }, [id, pw, pwcheck, email]);

    const nextpage = props.nextpage;
    const presentpage = props.presentpage;


    return (
        <WhiteBox> 
            <div className='bigoutline'>
                <div className='outline'>
                    <div className='inputInformation'>
                        <img src={Email} alt=""/> 
                            아이디 &nbsp; <span style={{ color: palette[3] }}>(필수)</span>
                    </div>
                    <div className='check'>
                        <input 
                            onChange={(e)=>{
                                setId(e.target.value);
                            }}

                            value={id}
                            type={"text"} 
                            className="information" 
                            placeholder="ex) abcdefg@naver.com"
                            style={{width: "29rem", 
                                    height: "2rem",
                                    backgroundColor:"#F3F3F3",
                                    border: "none",
                                    borderRadius: "3px",
                            }}
                        />
                        <div className='idcheck'>
                        <Button
                            text="중복확인"
                            fullWidth
                            history={history}
                            to={nextlink}
                            style={{height: "2.2rem", width: "6rem", borderRadius: "3px"}}
                            />
                        </div>
                    </div>
                </div>

                <div className='outline'>
                    <div className='inputInformation'>
                        <img src={Lock} alt="" /> 비밀번호 &nbsp; <span style={{ color: palette[3] }}>(필수)</span>
                    </div>
                    <div>
                        <input 
                            onChange={(e)=>{
                                setPw(e.target.value);
                            }}

                            value={pw}
                            type={"password"} 
                            className="information"  
                            placeholder="8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요." 
                            style={{width: "34.8rem", 
                                    height: "2rem",
                                    backgroundColor:"#F3F3F3",
                                    border: "none",
                                    borderRadius: "3px"
                            }}
                        />
                    </div>
                </div>

                <div className='outline'>
                    <div className='inputInformation'>
                        <img src={Lock} alt="" /> 비밀번호 확인 &nbsp; <span style={{ color: palette[3] }}>(필수)</span>
                    </div>
                    <div>
                        <input 
                            onChange={(e)=>{
                                setPwcheck(e.target.value);
                            }}

                            value={pwcheck}
                            type={"password"} 
                            style={{width: "34.8rem", 
                                    height: "2rem",
                                    backgroundColor: "#F3F3F3",
                                    border: "none",
                                    borderRadius: "3px"
                            }}
                        />
                    </div>
                </div>

                <hr style={{color: "#EFEFEF", width:"100%"}}/>

                <div className='outline'>
                    <div className='inputInformation'>
                        <div> 본인 확인 메일 &nbsp;<span  style={{ color: "#AAAAAA" }}>(선택)</span></div>
                    </div>
                    <div>
                        <input  
                            onChange={(e)=>{
                                setEmail(e.target.value);
                            }}

                            value={email}
                            type={"text"} 
                            style={{width: "34.8rem", 
                                    height: "2rem",
                                    backgroundColor:"#F3F3F3",
                                    border: "none",
                                    borderRadius: "3px"
                            }}
                        />
                    </div>
                </div>
    

            {Ok ? (
                    <Button
                        text="다음으로"
                        fullWidth
                        history={history}
                        to={nextpage}
                        props={{id: id,pw: pw,email: email}}
                        style={{height: "2.5rem", borderRadius: "3px"}}
                    />
                ) : ( 
                    <Button
                        text="다음으로"
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
  
  export default Register1;
  