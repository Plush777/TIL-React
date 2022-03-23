import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { click } from '@testing-library/user-event/dist/click';

function App() {
  let posts = '와플대학 가오리역 캠퍼스'
  let [title,modifyTitle] = useState(['피자 먹고싶다','치킨 먹고싶다']);
  let [like,changeLike] = useState(0);
  let [modalDisplay,modifyModal] = useState(false);
  let [btnNum,modifyBtnNum] = useState(0);
  let [input,modifyInput] = useState('');
  
  let likeFunc = () => {
    changeLike(like+1);
  }

  let btnChangeTitle = () => {
    let titleArr = [...title];
    titleArr[0] = '라면 먹고싶다';
    modifyTitle(titleArr);
  }

  let strSortFunc = () => {
    let strArr = [...title];
    strArr = strArr.sort();
    modifyTitle(strArr);
  }

  let changeModal = () => {
    modifyModal(!modalDisplay);
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={strSortFunc}>정렬</button>
      <button onClick={btnChangeTitle}>btn</button>
      <div className="list">
        <h3>{title[0]} <span onClick={likeFunc}>👍</span>{like}</h3>
        <p>2월 17일 발행</p>
      </div>
      <hr/>
      <div className="list">
        <h3 onClick={changeModal}>{title[1]}</h3>
        <p>2월 17일 발행</p>
      </div>
      <hr/>
      {
        modalDisplay === true ? <Modal titleSend={title} clickTitle={btnNum}/> : null
      }

      {
        title.map((i,idx) => {
          return(
            <div className="list" key={idx}>
              <h3 onClick={() =>{ modifyBtnNum(idx) }}>{i}</h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>
          )
        })
      }
      <div className='publish'>
        <input onChange={(e)=>{modifyInput(e.target.value)}}></input>
        <button onClick={()=>{
        var arrayCopy = [...title];
        arrayCopy.unshift(input);
        modifyTitle(arrayCopy);
        }}>저장</button>
      </div>

      <button onClick={() =>{ modifyBtnNum(0) }}>버튼1</button>
      <button onClick={() =>{modifyBtnNum(1)}}>버튼2</button>
    </div>
  );
}

function Modal(props){
  return (
    <>
      <div className='modal'>
        <h2>{props.titleSend[props.clickTitle]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}
export default App;
