import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import pageReducer from "./pageSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
