import { alert, request, util } from "@pagser/common";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, RootState } from "../store";

export type TSection =
  | ""
  | "home"
  | "subscriptions"
  | "history/pages"
  | "history/comments"
  | "read-later"
  | "liked-pages"
  | "collections"
  | "dashboard"
  | "analytics"
  | "monetization"
  | "pages/published"
  | "pages/draft"
  | "pages/trash";

interface SideNavState {
  section: TSection;
}

const initialState: SideNavState = {
  section: "",
};

export const sideNavSlice = createSlice({
  name: "sideNav",
  initialState,
  reducers: {
    setSection: (state, action: PayloadAction<TSection>) => {
      state.section = action.payload;
    },
  },
});

export const { setSection } = sideNavSlice.actions;

export const selectSection = (state: RootState) => state.sideNav.section;

export default sideNavSlice.reducer;
