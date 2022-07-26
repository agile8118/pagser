import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "./store";

interface UserState {
  id: string;
  status: string;
  readLater: boolean;
  subscribed: boolean;
}

const initialState: UserState = {
  id: "",
  status: "",
  readLater: false,
  subscribed: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setReadLater: (state, action: PayloadAction<boolean>) => {
      state.readLater = action.payload;
    },
    setSubscribed: (state, action: PayloadAction<boolean>) => {
      state.subscribed = action.payload;
    },
  },
});

export const { setId, setStatus, setReadLater, setSubscribed } =
  userSlice.actions;

export const selectId = (state: RootState) => state.user.id;
export const selectStatus = (state: RootState) => state.user.status;
export const selectReadLater = (state: RootState) => state.user.readLater;
export const selectSubscribed = (state: RootState) => state.user.subscribed;

export default userSlice.reducer;
