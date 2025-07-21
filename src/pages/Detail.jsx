import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Detail({frult}) {
  const {id} = useParams();
  const selectedFruit =frult[id];
  const [alert, setAlert] = useState(true);
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  // useEffect는 html이 전부다 렌더링이 완료된 후 실행이 됨
  useEffect(() => {
    //여기에 작성된 모든 코드들은 마운트, 업데이트 될때 실행
   let timer =  setTimeout(() => {
      console.log('setTime 종료');
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
  useEffect(() => {
    console.log('useEffect 확인용');
  }, [num])
    
  if(!selectedFruit) {
    return (<div>해당 상품이 없습니다.</div>)
  }
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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}
export default Detail