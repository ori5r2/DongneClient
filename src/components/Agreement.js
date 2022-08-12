import React, {useState, useEffect}  from 'react';
import Off from '../styles/imgs/icon/off.png';
import On from '../styles/imgs/icon/On.png';
import Button from '../components/Button';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const WhiteBox = styled.div`
    width: 30rem;
    height: 27rem;
    background-color: #ffffff;
    border-radius: 10px;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    padding-left: 3rem;
    padding-right: 3rem;
    font-size: 0.8rem;

    color: #000000;  
    & > div{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        text-align: center;
    }
  
    
    & img{
        padding-right: 1rem;
        width: 1.5rem;
        height: 1.5rem;
    }

    .Agreementbtn{
        height: 2rem;
        border-radius: 3px;
    }

`

const InnerBox = styled.div`
    width: 25rem;
    height: 3rem;
    border-radius: 5px;
    font-size: 0.5rem;
    /* padding-left: 7rem; */
    background-color: #EAEAEA;
    overflow-y: scroll;
    scrollbar-width: none;
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
        // setOk(true);
      } else {
        setSelectAll(false);
        // setOk(false);
      }
      if (selectFirst && selectSecond) {
        setOk(true);
      } else {
        setOk(false);
      }
    }, [selectFirst, selectSecond, selectOption]);

    const Nextpage = props.Nextpage;

    return (
        <WhiteBox>
        <div>
            <h3>약관동의</h3>
            <div>

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
                <InnerBox>
                    aa<br /> bb <br /> cc <br /> dd <br /> ee <br /> ff <br /> gg <br />
                </InnerBox>
            </div>
            <hr style={{color: "#ffffff"}}/>

            <div>
            {selectFirst ? (
                <img src={On} alt='' onClick={() => setSelectFirst(!selectFirst)} />
                ) : (
                    <img src={Off} alt='' onClick={() => setSelectFirst(!selectFirst)} />
                    )}
            서비스 이용 약관 <span style={{color: "blue"}}>(필수)</span>
                <InnerBox>
                    aa<br /> bb <br /> cc <br /> dd <br /> ee <br /> ff <br /> gg <br />
                </InnerBox>
            </div>

            <div>
            {selectSecond ? (
                <img src={On} alt='' onClick={() => setSelectSecond(!selectSecond)} />
                ) : (
                    <img
                    src={Off}
                    alt=''
                    onClick={() => setSelectSecond(!selectSecond)}
                    />
                    )}
            개인정보 처리 방침 <span style={{color: "blue"}}>(필수)</span>
                <InnerBox>
                    aa<br /> bb <br /> cc <br /> dd <br /> ee <br /> ff <br /> gg <br />
                </InnerBox>
            </div>

            <div>
            {selectOption ? (
                <img src={On} alt='' onClick={() => setSelectOption(!selectOption)} />
                ) : (
                    <img
                    src={Off}
                    alt=''
                    onClick={() => setSelectOption(!selectOption)}
                    />
                    )}
            이벤트/마케팅 수신동의 <span style={{color: '#D5D5D5' }}>(선택)</span>
                <InnerBox>
                    aa<br /> bb <br /> cc <br /> dd <br /> ee <br /> ff <br /> gg <br />
                </InnerBox>
            </div>
            
            <Button
            className="Agreementbtn"
            text="확인"
            fullWidth
            history={history}
            to={Nextpage}
            style={{ marginBottom: '1rem'}}
            />
            
            {Ok ? <div></div>: null}
        </div>
    </WhiteBox>
    );
  }
  
  export default Agreement;
  