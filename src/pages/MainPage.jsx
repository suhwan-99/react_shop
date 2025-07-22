import bg from '../bg.jpg';
import Card from '../components/Card';
import { useState } from 'react';
function MainPage({frult}) {
  const [frultCnt, setFrultCnt] = useState(3);
  const visibleFrult = frult.slice(0, frultCnt);
  // console.log(visibleFrult);
  return (
    <>
    <div className="main-bg" style={{backgroundImage: 'url(' + bg + ')', height: '400px'}}></div>
        <br />
        <div className='container'>
          <div className='row'>
            {visibleFrult.map((data, i) => {
              return (
                <Card data={data} key={i}/>
              )
          })}
        
          </div>
        </div>
        {
          frultCnt > frult.length ?
          <div className="alert alert-danger">더이상 상품이 없습니다.</div>
          : <button onClick={() => {
             setFrultCnt(frultCnt + 3);
             }}>3개 더보기</button>
        }
    </>
  )
}

export default MainPage