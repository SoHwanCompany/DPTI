import { configureStore } from "@reduxjs/toolkit";
import historyReducer from "@/redux/historySlice"

export const store = configureStore({
  reducer: {
    historyReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;