import { alert, request, util, loadingModal } from "@pagser/common";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, RootState } from "./store";

interface IPage {
  id: string;
  contents: any;
  photo: any;
  url: string;
  type: "public" | "private";
  dateVisited: string;
  author: any;
}

export type TSortBy = "date-added-asc";
export type TStatus = "normal" | "editing";
export type TFilterBy = "all" | "private" | "public";
export type TKind = "PB-pages" | "history" | "read-later" | "liked-pages";

interface PagesState {
  loading: boolean;
  list: IPage[];
  selected: string[];
  status: TStatus;
  sortBy: TSortBy;
  filterBy: TFilterBy;
}

const initialState: PagesState = {
  loading: true,
  list: [],
  selected: [],
  status: "normal",
  sortBy: "date-added-asc",
  filterBy: "all",
};

export const pagesSlice = createSlice({
  name: "Pages",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setStatus: (state, action: PayloadAction<TStatus>) => {
      state.status = action.payload;
      state.selected = [];
    },
    setSortBy: (state, action: PayloadAction<TSortBy>) => {
      state.sortBy = action.payload;
    },
    setFilterBy: (state, action: PayloadAction<TFilterBy>) => {
      state.filterBy = action.payload;
    },
    setList: (state, action: PayloadAction<IPage[]>) => {
      state.list = action.payload;
    },
    selectPage: (state, action: PayloadAction<string>) => {
      const index = state.selected.indexOf(action.payload);

      if (index === -1) {
        // Add the page to the selected list
        state.selected.push(action.payload);
      } else {
        // Remove the page from the selected list
        state.selected.splice(index, 1);
      }
    },
  },
});

// Fetch pages from the server
export const fetchPages =
  (kind: TKind, filterBy: TFilterBy, sortBy?: TSortBy): AppThunk =>
  async (dispatch, getState) => {
    dispatch(setLoading(true));

    const url =
      kind === "PB-pages"
        ? `/users/${window.location.pathname.split("/")[2]}/pages`
        : `/${kind}?sortBy=${sortBy}&filterBy=${filterBy}`;

    // if (kind !== "PB-pages") loadingModal("Loading...");
    const response = (await request.get(url, {
      auth: true,
    })) as any;

    // loadingModal();

    // @TODO: make it so that we always use data.pages
    dispatch(setList(response.results || response.pages));

    if (filterBy) dispatch(setFilterBy(response.filterBy));
    if (sortBy) dispatch(setSortBy(response.sortBy));

    dispatch(setLoading(false));
  };

// Sends a request to server to remove pages from a list, or delete draft pages
export const removePages =
  (kind: TKind): AppThunk =>
  async (dispatch, getState) => {
    loadingModal("Loading...");

    await request.delete(`/${kind}`, {
      data: { ids: getState().pages.selected },
      auth: true,
    });

    const newList = getState().pages.list.filter((page) => {
      return getState().pages.selected.indexOf(page.id) === -1;
    });

    dispatch(setList(newList));
    dispatch(setStatus("normal"));

    loadingModal();

    if (getState().sideNav.section === "pages/draft") {
      alert("Draft Page(s) successfully deleted.", "success");
    } else {
      alert("Page(s) successfully removed from your list.", "success");
    }
  };

export const {
  setLoading,
  setStatus,
  setSortBy,
  setFilterBy,
  selectPage,
  setList,
} = pagesSlice.actions;

export const selectLoading = (state: RootState) => state.pages.loading;
export const selectStatus = (state: RootState) => state.pages.status;
export const selectSortBy = (state: RootState) => state.pages.sortBy;
export const selectFilterBy = (state: RootState) => state.pages.filterBy;
export const selectSelectedPages = (state: RootState) => state.pages.selected;
export const selectPages = (state: RootState) => state.pages.list;

export default pagesSlice.reducer;
