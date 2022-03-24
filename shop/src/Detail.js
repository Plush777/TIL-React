import { useState } from 'react';
import { useHistory ,useParams } from 'react-router-dom';

function Detail(props){

    let {id} = useParams(); /*사용자가 입력한 Url 파라미터값이 들어있음. url에 /detail/1 이라 입력하면
    id 변수에 1이 들어가고, /2라 입력하면 2가 들어감.
    */
    let history = useHistory();

    return(
        <div className="container">
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