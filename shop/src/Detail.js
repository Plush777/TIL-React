import { useEffect, useState } from 'react';
import { useHistory ,useParams } from 'react-router-dom';
import styled from 'styled-components';

let Box = styled.div`
    padding: 20px;
`;

let Tit = styled.h4`
    font-size: 25px;
    color: ${props => props.color};
`;

function Detail(props){

    let [myAlert, setMyAlert] = useState(true);
    let [inputInData, setInputInData] = useState('');

    useEffect(() => {
        let timer = setTimeout(() => {
            setMyAlert(false);
        }, 2000);
        return () => clearTimeout(timer); //컴포넌트가 사라지면 timer 제거
    },[myAlert]);

    let {id} = useParams(); /*사용자가 입력한 Url 파라미터값이 들어있음. url에 /detail/1 이라 입력하면
    id 변수에 1이 들어가고, /2라 입력하면 2가 들어감.
    */
    let history = useHistory();

    return(
        <div className="container">
            <Box>ssss
                <Tit color={'#000'}>wwww</Tit>
            </Box>

            <input onChange={(e)=>{setInputInData(e.target.value)}}></input>

            {
                myAlert === true ? (<div className="my-alert2">
                <p>재고가 얼마 남지않았습니다.</p></div>) : null
            }

            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-danger" onClick={()=>{history.goBack()}}>뒤로가기</button> 
                    {/* history.push('/') -> 지정된 경로로 이동 */}
                </div>
            </div>
        </div> 
    )
}

export default Detail;