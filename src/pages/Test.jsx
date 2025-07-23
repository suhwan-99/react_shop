import { useTransition } from "react";
import { memo, useState } from "react";

function Child({num}) {
  return(
    <>
      <h1>1번째 자식 컴포</h1>
      <p>num 을 증가시켜서 보여줌 : {num + 10}</p>
    </>
  )
}
const Child2 = memo(() => {
  return(
    <>
      <h1>2번째 자식 컴포</h1>
      <p>num이랑 전혀 관련 없는 컴포</p>
    </>
  )
})
function Test() {
  const [num, setNum] = useState(0);
  const [data, setData] =useState('');
  const [isPending, startTransition] = useTransition();
  // 1만칸 짜리 배열을 Array를 이용해 만들고 그 안을 fill을 이용해 0으로 채움
  const a = new Array(10000).fill(0);
  return(
    <>
      <input type="text" onChange={(e) => {
        startTransition(() => {
          setData(e.target.value);
        })
      }} />
      {
        isPending ? <div>처리중</div> : 
        a.map(() => {
          return <div>{data}</div>
        })

      }
      {num} <button onClick={() => {
        setNum(num + 1)
      }}>++</button>
      <Child num ={num} />
      <Child2 />
    </>
  )
}

export default Test;