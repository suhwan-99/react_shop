import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom"
import TabContent from "../components/TabContent";
import { addItem } from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import { setWatched } from "../redux/WatchedSlice";

function Detail({frult}) {
  const {id} = useParams();
  const selectedFruit =frult[id];
  const [alert, setAlert] = useState(true);
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [tabNum, setTabNum] = useState(0);
  const dispatch = useDispatch();

  // useEffect는 html이 전부다 렌더링이 완료된 후 실행이 됨
  useEffect(() => {
    //여기에 작성된 모든 코드들은 마운트, 업데이트 될때 실행
   let timer =  setTimeout(() => {
      setAlert(false);
    }, 5000)
    
    return () => {
      clearTimeout(timer);
    }
  }, [] ) //의존성 배열- 변경 감지 된 state, props 설정하는거에 따라
         // 실행 여부가 결정됨
         
         // 의존성 배열이 없으면 mount, update 마다 실행 됨
         // 의존성 배열에 빈 배열을 넣으면 mount 시 1번만 실행 됨
         // 의존성 배열에 특정 state, props가 있으면
         // mount 될때와 해당 state, props가 update 될때 실행 됨
  // useEffect(() => {
  //   console.log('useEffect 확인용');
  // }, [num])
    
  if(!selectedFruit) {
    return (<div>해당 상품이 없습니다.</div>)
  }

  useEffect(() => {
    // 방금 본 상품의 id를 로컬스토리지에 추가
    let watched = localStorage.getItem('watched');
    watched = JSON.parse(watched);
    watched = [id, ...watched];
    
    // 중복되는 id는 표시 안하려면 Set 을 이용
    watched = new Set(watched);
    // Set은 배열X  >> 중복 제거 후 배열로 변환
    watched = Array.from(watched);
    if(watched.length === 4) {
      watched.pop();
    }
    localStorage.setItem('watched', JSON.stringify(watched));
    dispatch(setWatched(watched));


  }, [])

  return(
    <div className="container mt-3">
      <button onClick={() => {
        setNum(num + 1);
      }}>버튼</button>{num}
      <button onClick={() => {
        setNum2(num2 + 1);
      }}>버튼2</button>{num2}

      {
        alert ? 
      <div className="alert alert-danger">
        5초안에 구매하면 공짜
      </div>
      : ''
      }

      <div className="row">
        <div className="col-md-6">
         <img src={`https://raw.githubusercontent.com/ghkdss/react_sample_data/main/img/${frult[id].title}.jpg`} alt="" width='100%'/>
        </div>
        <div className="col-md-6">
          <h4>{frult[id].title}</h4>
          <p>{frult[id].content}</p>
          <p>{frult[id].price + '원'}</p>
          <button className="btn btn-danger" onClick={() => {
            const item = {
              id: id,
              title: frult[id].title,
              count: 1,
            }
            dispatch(addItem(item));
            window.alert('장바구니에 추가 완료');
          }}>주문하기</button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" justify defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => {
            setTabNum(0);
          }}>상세정보</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => {
            setTabNum(1);
          }}>리뷰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => {
            setTabNum(2);
          }}>반품, 교환</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tabNum={tabNum} />
    </div>
  )
}
export default Detail