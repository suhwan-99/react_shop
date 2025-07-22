import { configureStore, createSlice } from "@reduxjs/toolkit";
import  cart  from "./CartSlice";
import watched from "./WatchedSlice";


const num =  createSlice({
  name: 'num',
  initialState: 1,
  reducers: {
    changeNum() {
      return 10
    },
    plusNum(state) {
      return state + 1;
    },
    nPlusNum(state, action) {
      console.log(action);
      return state + action.payload;
    },
  }
})
// 변수 num을 reducer로 보내면 이니셜 1까지만 보내지고 num안에 reducers는 안보내짐
// >> 따로 reducers를 보내기 위해 export를 하는 것
// actions는 reducers안에 있는 (key)함수들을 가지고 있는 코드
export const{changeNum, plusNum, nPlusNum} = num.actions
// num.actions 안에는 changeNum이란 키와 안에 함수들, 다른 키가 있다면 그 키와 함수들이
// 오브젝트 형태로 가지고 있음

const obj = createSlice({
  name:'obj',
  initialState: {name: 'hong', age: 10},
  reducers: {
    changeAge(state,action) {
      state.age = action.payload
    },
  }
})

export const{changeAge} = obj.actions


export default configureStore({
  reducer: {
    cart: cart.reducer,
    num: num.reducer,
    obj: obj.reducer,
    watched: watched.reducer,
  }
})