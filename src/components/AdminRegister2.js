import React, {useState, useEffect}  from 'react';
import category from '../styles/imgs/icon/category_add.png';
import Button from './Button';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import palette from '../styles/pallete';
import { Axios } from '../../node_modules/axios/index';

const WhiteBox = styled.div`
    width: 35rem;
    height: 28rem;
    border-radius: 10px;
    padding-left: 3rem;
    padding-right: 3rem;
    font-size: 1rem;

    background: linear-gradient(180deg, #FFFFFF 0%, rgba(251, 251, 251, 0) 100%);
    border: 2px solid rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(40px);
    /* Note: backdrop-filter has minimal browser support */
    
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

    .idcheck{
        padding-left: 1rem;
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
    const location = useLocation();

    const [year, setYear] = useState("");
    const [area, setArea] = useState("");
    const [introduce, setIntroduce] = useState("");
    const [url, setUrl] = useState("");
    const [Ok, setOk] = useState(false);

    const nextpage = props.nextpage;
    const presentpage = props.presentpage;



    // const handleApi= async() =>{
    //     console.log("jepp");
    //     const res  = await  Axios.post({
    //         url: {"http://3.38.55.57:3000"}
    //     })
    // }

    return (
        <WhiteBox> 
            <div className='bigoutline'>
                <div className='outline'>
                    <div className='inputInformation'>
                        <div>단체 카테고리 &nbsp; <span style={{ color: palette[3] }}>(필수)</span></div>
                    </div>
                    <div>
                        <img src={category} alt=""
                            style={{width:"5rem"}}
                        />
                    </div>
                </div>

                <div className='twin'>
                    <div className='outline'>
                        <div className='inputInformation'>
                            <div>단체 설립 연도 &nbsp; <span style={{ color: palette[3] }}>(필수)</span></div>
                        </div>
                        <div className='check'>
                            <input 
                                onChange={(e)=>{
                                    setYear(e.target.value);
                                }}

                                value={year}
                                type={"number"} 
                                className="information" 
                                placeholder="날짜를 입력하세요."
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
                            <div>단체 주 활동 지역&nbsp; <span style={{ color: palette[3] }}>(필수)</span> </div>
                        </div>
                        <div>
                            <input 
                                onChange={(e)=>{
                                    setArea(e.target.value);
                                }}

                                value={area}
                                type={"text"} 
                                className="information"  
                                placeholder="지역을 입력하세요." 
                                style={{width: "16.4rem", 
                                        height: "2rem",
                                        backgroundColor:"#F3F3F3",
                                        border: "none",
                                        borderRadius: "3px"
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className='outline'>
                    <div className='inputInformation'>
                        <div>단체 소개 &nbsp; <span style={{ color: palette[3] }}>(필수)</span></div>
                    </div>
                    <div>
                        <textarea 
                            onChange={(e)=>{
                                setIntroduce(e.target.value);
                            }}
                            value={introduce}
                            type={"text"} 
                            style={{width: "34.8rem", 
                                    height: "5rem",
                                    backgroundColor: "#F3F3F3",
                                    border: "none",
                                    borderRadius: "3px",
                                    resize: "none"
                            }}
                        />
                    </div>
                </div>

                <div className='outline'>
                    <div className='inputInformation'>
                        <div> 단체 사이트 / 채널 URL &nbsp;<span  style={{ color: palette[3] }}>(선택)</span></div>
                    </div>
                    <div>
                        <input  
                            onChange={(e)=>{
                                setUrl(e.target.value);
                            }}
                            placeholder="http://"
                            value={url}
                            type={"text"} 
                            className="information"
                            style={{width: "34.8rem", 
                                    height: "2rem",
                                    backgroundColor:"#F3F3F3",
                                    border: "none",
                                    borderRadius: "3px"
                            }}
                        />
                    </div>
                </div>
                {/* <div onClick={()=>{
                    handleApi();
                }}>가입 완료하기</div> */}
                
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
  