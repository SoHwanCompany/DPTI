import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HistoryState = {
  history: string;
};

// 6자리 랜덤 값 생성
const initialState = {
  history : "프로그래밍에 대한 흥미와 열정이 있나요?",
} as HistoryState;

export const history = createSlice({
  name: "history",
  initialState,
  reducers: {
    reset: (state) => {
      state.history = "";
    },
    add: (state, action) => {
      state.history = action.payload;
    }
    // generate: (state) => {
    //   state.value = Math.floor(Math.random() * (max - min) + min);
    // },

  },
});

export const {
  // generate,
  reset,
  add
} = history.actions;
export default history.reducer;