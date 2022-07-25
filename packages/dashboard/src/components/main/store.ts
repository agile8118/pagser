import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sideNavReducer from "./features/sideNav/sideNavSlice";

export const store = configureStore({
  reducer: {
    sideNav: sideNavReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
