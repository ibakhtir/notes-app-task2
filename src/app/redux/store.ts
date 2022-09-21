import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import notesReducer from "./notes/slice";

export const store = configureStore({
  reducer: notesReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
