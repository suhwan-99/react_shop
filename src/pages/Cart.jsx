import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAge, changeNum, nPlusNum, plusNum } from "../redux/store";
import { addCount, remove, removeItem } from "../redux/CartSlice";

function Cart() {
  // reducer로 내보낸걸 받으려면 useSelcetor을 사용
  const cart = useSelector(state => state.cart);
  const num = useSelector(state => state.num);
  const obj = useSelector(state => state.obj);
  // 변경함수를 쓸 수 있게 해주는 함수
  const dispatch = useDispatch();
  return (
    <Table>
      {/* num: {num}
        <button onClick={() => {
          dispatch(changeNum());
        }}>변경 버튼</button>
        <button onClick={() => {
          dispatch(plusNum());
        }}>+1 버튼</button>
        <button onClick={() => {
          dispatch(nPlusNum(3));
        }}>n씩 증가 버튼</button>
        <div>
          {obj.name} : {obj.age}
          <button onClick={() => {
            dispatch(changeAge(30));
          }}>나이 변경 버튼</button>
        </div> */}
      <thead>
        <tr>
          <th>번호</th>
          <th>상품명</th>
          <th>수량</th>
          <th>수정</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {
         cart.map((item, i) => {
          return(
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.count}</td>
            <td><button onClick={() => {
              dispatch(addCount(i));
            }}>+++</button> 
              <button onClick={() => {
              dispatch(remove(i));
              }}>---</button>
            </td>
            <td><button onClick={() => {
              dispatch(removeItem(i));
            }}>X</button></td>
               {/* { 
                 {item.count} <= 0 ?  e.stopPropagation() : 
              } */}        
          </tr>
          )
        })
        }
      </tbody>
    </Table>
    )
}

export default Cart