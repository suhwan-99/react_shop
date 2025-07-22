import { createSlice, removeListener } from "@reduxjs/toolkit";
const cart = createSlice({
  name: 'cart',
  initialState: [
    {id: 0, title: 'apple', count: 3},
    {id: 2, title: 'watermelon', count: 7},
  ],
  reducers: {
    addCount(state, action) {
      state[action.payload].count++;
    },
    addItem(state, action) {
      // 장바구니에 있는지 없는지 판단, 판단기준은 상품들을 식별하는 값인 id를 사용
      // id가 장바구니에 있나 없나 검사
      // findIndex한수 : 조건식에 만족하는 인덱스를 리턴, 없으면 -1 리턴
      let index = state.findIndex(data => {
        return data.id == action.payload.id
      });
      if( index !== -1) {
        state[index].count++;
      } else {
        state.push(action.payload);
      }
    },
    remove(state,action) {
      state[action.payload].count--;
    },
    removeItem(state, action) {
      state.splice(action.payload, 1);
    },
  },
})
export const{addCount, addItem, remove, removeItem} = cart.actions;
export default cart;