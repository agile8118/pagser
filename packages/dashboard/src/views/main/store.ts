import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sideNavReducer from "./side-nav/sideNavSlice";
import pagesReducer from "./pagesSlice";

export const store = configureStore({
  reducer: {
    sideNav: sideNavReducer,
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
