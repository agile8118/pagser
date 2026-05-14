import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import pagesReducer from "./pagesSlice";

export const store = configureStore({
  reducer: {
    pages: pagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
