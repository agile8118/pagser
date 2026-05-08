import { alert, request, util, loadingModal } from "@pagser/common";
import type { PublicProfileAPI, UserPagesAPI, HistoryAPI, ReadLaterAPI, RatingAPI } from "@pagser/common";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, RootState } from "./store";

// Local view-model stored in Redux. All fields beyond id/contents are optional
// because different endpoints return different subsets (e.g. draft pages have no photo_url).
interface IPage {
  id: string;
  contents: { title: string; briefDes: string; };
  url?: string;
  type?: "public" | "private";
  photo_url?: string | null;
  author?: { username: string; };
  dateVisited?: string;
  updatedAt?: string;
  date?: string;
}

export type TSortBy = "date-added-asc";
export type TStatus = "normal" | "editing";
export type TFilterBy = "all" | "private" | "public";
export type TKind =
  | "PB-pages"
  | "history"
  | "read-later"
  | "liked-pages"
  | "user-pages/published"
  | "user-pages/draft";

// Union of all actual server response types. Changing a field in any of these
// shared types will produce a compile error in extractList() below.
type FetchPagesResponse =
  | UserPagesAPI.FetchPublishedPagesResponse
  | UserPagesAPI.FetchDraftPagesResponse
  | HistoryAPI.FetchHistoryResponse
  | ReadLaterAPI.FetchResponse
  | RatingAPI.FetchLikedPagesResponse
  | PublicProfileAPI.FetchPagesResponse;

// Binds each kind to its concrete response type, enforcing the contract at compile time.
function extractList(kind: TKind, response: FetchPagesResponse): IPage[] {
  switch (kind) {
    case "user-pages/published":
      return (response as UserPagesAPI.FetchPublishedPagesResponse).results;
    case "user-pages/draft":
      return (response as UserPagesAPI.FetchDraftPagesResponse).results;
    case "history":
      return (response as HistoryAPI.FetchHistoryResponse).results;
    case "read-later":
      return (response as ReadLaterAPI.FetchResponse).pages;
    case "liked-pages":
      return (response as RatingAPI.FetchLikedPagesResponse).results;
    case "PB-pages":
      return (response as PublicProfileAPI.FetchPagesResponse).pages;
  }
}

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
  (kind: TKind, filterBy?: TFilterBy, sortBy?: TSortBy): AppThunk =>
  async (dispatch, getState) => {
    dispatch(setLoading(true));

    const url =
      kind === "PB-pages"
        ? `/users/${window.location.pathname.split("/")[2]}/pages`
        : `/${kind}?sortBy=${sortBy}&filterBy=${filterBy}`;

    const response = await request.get<FetchPagesResponse>(url, {
      auth: true,
    });

    dispatch(setList(extractList(kind, response)));

    if (filterBy && "filterBy" in response && response.filterBy) dispatch(setFilterBy(response.filterBy as TFilterBy));
    if (sortBy && "sortBy" in response && response.sortBy) dispatch(setSortBy(response.sortBy as TSortBy));

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
