import style from './App.module.css'
import data from './mokData';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Header from './components/Header';
import Detail from './pages/Detail';
import About from './pages/About';
import styled from 'styled-components';
import axios from 'axios';

// styled-componet 기본 사용법
// const 컴포넌트 이름 지정= styled.태그명 `css속성`

const Btn = styled.button `
  background:${props => props.bg};
  color: ${props => props.bg === 'blue' ? 'white' : 'black'};
  font-size:30px;
  border: 1px solid red;
`
const Btn2 = styled(Btn)`
width: 200px;
height: 200px;
`
const Div = styled.div `
  padding: 20px;
  background: black:
`
function App() {
  const [frult,setFrult] = useState([]);
  
  useEffect(() =>{
    axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/fruit.json')
      .then(response => {
      setFrult([...response.data]);
    }) 
      .catch(error => {
        console.log(error);
    })
  },[])
     
  
  
    

  return (
    <div className={style.container}>
      {/* css가 반영된 Btn태그를 사용 */}
      {/* <Div>
        <Btn bg='pink'>버튼</Btn>
        <Btn bg='blue'>버튼</Btn>
        <Btn2 bg='yellowgreen'>버튼</Btn2>
      </Div> */}

      <Header />
      <Routes>
        <Route path='/' element={< MainPage frult={frult}/>} />
        <Route path='/detail/:id' element={<Detail frult={frult}/>} />
        <Route path='/test' element={<h1>테스트페이지</h1>} />
        <Route path='/about' element={ <About />} >
          {/* 하위 라우트들은 상위 라우트 안에, path도 상위 경로 x 본인것만 /없어도 됨 */}
          <Route path='intro' element={<div> <h1>회사 소개</h1></div> } />
          <Route path='histoty' element={<div><h1>연혁</h1></div> } />
          <Route path='loc' element={<div> 오시는 길</div> } />
        </Route>
        <Route path='*' element={<h1>존재하지 않는 페이지</h1>} />
      </Routes>
      <button onClick={() => {
        axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/morefruit.json')
          .then(response => {
            setFrult([...frult,...response.data])
            console.log(response.data)
          })
          .catch((error) => {
            console.log(error);
          })
      }}>더보기</button>

      <button onClick={() => {
        axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/fruit.json')
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
      }}>과일정보 받아오기</button>
    </div>
  )
}

export default App
