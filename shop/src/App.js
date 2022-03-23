import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Data from './data';

function App() {

  let [shoes, modfiyShoes] = useState(Data); //import한 data.js
  // let [shoesNum, modfiyShoesNum] = useState(0);

  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className='jumbotron'>
            <h1>20% Season Off</h1>
            <p>
            Lorem ipsum is placeholder text commonly used in the graphic, 
            print, and publishing industries for previewing layouts and visual mockups.
            </p>
            <p>
              <button type='button' className='btnPrimary'>Learn more</button>
            </p>
        </div>
        
        <div className='container'>
          <div className='row'>
            {/* i : shoes 안에있던 하나하나의 데이터 
                k : 반복문을 돌면서 0,1,2씩 증가되는 변수
            */}
            {
              shoes.map((i,k) => {
                return (
                  <>
                  <ShoesComponent shoesData={shoes[k]} k={k} key={k}/>
                  </>
                )
              })
            }
          </div>
        </div>
    </div>
  );
}

function ShoesComponent(props){
  return(
    <>
      <div className='col-md-4'>
          <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.k+1) + '.jpg'} alt='' width="100%"></img>
          {/* 숫자가 0부터 시작하기 때문에 k에 +1을 더해서 1부터 시작하게 만들기 */}
          <h4>{props.shoesData.title}</h4>
          <p>{props.shoesData.content } & {props.shoesData.price}</p>
      </div>
    </>
  )
}

export default App;
