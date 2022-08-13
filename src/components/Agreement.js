import React, {useState, useEffect}  from 'react';
import Off from '../styles/imgs/icon/off.png';
import On from '../styles/imgs/icon/On.png';
import Button from '../components/Button';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const WhiteBox = styled.div`
    width: 35rem;
    height: 28rem;
    background-color: #ffffff;
    /* filter: blur(10px); */
    border-radius: 10px;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    padding-left: 3rem;
    padding-right: 3rem;
    font-size: 1rem;

    color: #2D3B5C;  

    & > div{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        /* text-align: center; */
    }
    
    & img{
        padding-right: 1rem;
        width: 1.5rem;
        height: 1.5rem;
    }

    .outline{
        padding-top: 1.5rem;
    }
    
    .Agreementbtn{
        height: 2rem;
        border-radius: 3px;
    }

    .class {
        display: flex;
        align-items: center;
        padding-bottom: 0.5rem;
    }

    .explain{
        padding-bottom: 0.5rem;
        padding-left: 2.5rem;
    }

    .in{
        overflow-y: scroll;
        overflow-x: hidden;
        scrollbar-width: none;
        width: 35rem;
        height: 15rem;
    }

`

const InnerBox = styled.div`
    width: 36.5rem;
    height: 4rem;
    border-radius: 3px;
    font-size: 0.7rem;
    background-color: #F3F3F3;
    overflow-y: scroll;
    padding: 0.3rem;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
       & ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    
`

function Agreement(props) {
    const history  = useHistory();

    const [selectAll, setSelectAll] = useState(false);
    const [selectFirst, setSelectFirst] = useState(false);
    const [selectSecond, setSelectSecond] = useState(false);
    const [selectOption, setSelectOption] = useState(false);
    const [Ok, setOk] = useState(false);
    
    useEffect(() => {
      if (selectAll) {
        setSelectFirst(true);
        setSelectSecond(true);
        setSelectOption(true);
        setOk(true);
      } else {
        setOk(false);
      }
    }, [selectAll]);
  
    useEffect(() => {
      if (selectFirst && selectSecond && selectOption) {
        setSelectAll(true);
        setOk(true);
      } else {
        setSelectAll(false);
        setOk(false);
      }
      if (selectFirst && selectSecond) {
        setOk(true);
      } else {
        setOk(false);
      }
    }, [selectFirst, selectSecond, selectOption]);

    const Nextpage = props.Nextpage;
    const Presentpage = props.Presentpage;

    return (
        <WhiteBox>
        <div className='outline'>
            <h3>약관동의</h3>
            <div>
                <div className='class'>
                    {selectAll ? (
                        <img
                        src={On}
                        alt=''
                        onClick={() => {
                            setSelectAll(false);
                            setSelectFirst(false);
                            setSelectSecond(false);
                            setSelectOption(false);
                        }}
                        />
                        ) : (
                            <img src={Off} alt='' onClick={() => setSelectAll(!selectAll)} />
                            )}
                    전체 약관에 동의합니다.
                </div>
            </div>
            <hr style={{color: "#EFEFEF", width:"100%"}}/>
            
            <div className='in'>
                <div>
                    <div className='class'>
                        {selectFirst ? (
                            <img src={On} alt='' onClick={() => setSelectFirst(!selectFirst)} />
                            ) : (
                                <img src={Off} alt='' onClick={() => setSelectFirst(!selectFirst)} />
                                )}
                        서비스 이용 약관 <span style={{color:"#2B78FF"}}>(필수)</span>
                    </div>
                    <div className='explain'>
                        <InnerBox className='innerText'>
                            aa<br /> bb <br /> cc <br /> dd <br /> ee <br /> ff <br /> gg <br />
                        </InnerBox>
                    </div>
                </div>

                <div>
                    <div className='class'>
                        {selectSecond ? (
                            <img src={On} alt='' onClick={() => setSelectSecond(!selectSecond)} />
                            ) : (
                                <img
                                src={Off}
                                alt=''
                                onClick={() => setSelectSecond(!selectSecond)}
                                />
                                )}
                        개인정보 처리 방침 <span style={{color: "#2B78FF"}}>(필수)</span>
                    </div>
                    <div className='explain'>
                        <InnerBox className='innerText'>
                            aa<br /> bb <br /> cc <br /> dd <br /> ee <br /> ff <br /> gg <br />
                        </InnerBox>
                    </div>
                </div>

                <div>
                    <div className='class'>
                        {selectOption ? (
                            <img src={On} alt='' onClick={() => setSelectOption(!selectOption)} />
                            ) : (
                                <img
                                src={Off}
                                alt=''
                                onClick={() => setSelectOption(!selectOption)}
                                />
                                )}
                        이벤트/마케팅 수신동의 <span style={{color: '#AAAAAA' }}>(선택)</span>
                    </div>
                    <div className='explain'>
                        <InnerBox className='innerText'>
                            aa<br /> bb <br /> cc <br /> dd <br /> ee <br /> ff <br /> gg <br />
                        </InnerBox>
                    </div>
                </div>
            </div>

            {Ok ? (
                <Button
                className="Agreementbtn"
                text="확인"
                fullWidth
                history={history}
                to={Nextpage}
                style={{ marginTop:"1rem", height: "2.5rem"}}>
                </Button>
            ) : ( 
                <Button
                className="Agreementbtn"
                text="확인"
                fullWidth
                history={history}
                to={Presentpage}
                style={{ marginTop:"1rem", height: "2.5rem"}}>
                </Button>
            ) }
        </div>
        
    </WhiteBox>
    );
  }
  
  export default Agreement;
  