import { useEffect, useState } from 'react'
import './TabContent.css'


function TabContent({tabNum}) {
  const [fade, setFade] = useState('');

  // state를 업데이트 하는 작업은 비동기로 처리
  // state를 변경하는 함수를 호출하면 바로 반영하는게 아니라
  // 내부적으로 일단 저장함
  // 그리고 한번에 모아둔 변경처리를 일괄적으로 처리 -> 랜더링을 한번만 함
  useEffect(() => {
    setFade('')
    const timer = setTimeout(() => {
      setFade('end');
      
    },50)
  },[tabNum])

  return (
    <div className={`start ${fade}`}>
      {
        [<div>상세정보</div>,<div>리뷰</div>,<div>반품 및 교환</div>][tabNum]
      }
    </div>
  )
    if(tabNum === 0){
      return (
        <div>상세정보</div>
      )
    } else if (tabNum === 1 ){
      return (
        <div>리뷰</div>
      )
    } else if (tabNum === 2) {
      return (
        <div>반품 및 교환</div>
      )
    }
}

export default TabContent