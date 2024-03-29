import { alert, request, util, loadingModal } from "@pagser/common";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, RootState } from "./store";

import {
  setId as setUserId,
  setStatus as setUserStatus,
  setSubscribed as setUserSubscribed,
  setReadLater as setUserReadLater,
  setSubscribed,
} from "./userSlice";

interface IContents {
  title: string;
  briefDescription?: string;
  targets?: string;
  body?: string;
}

interface IAuthor {
  id: string;
  photoUrl: string;
  biography: string;
  username: string;
  name: string;
  subscribersCount: number;
}

export interface IConfigurations {
  anonymously?: boolean;
  rating?: boolean;
  comments?: boolean;
  links?: boolean;
}

interface IRatings {
  likes: number;
  dislikes: number;
}

interface IAttachFile {
  name: string;
  _id: string;
}

interface PageState {
  loading: boolean;
  id: string;
  contents: IContents;
  photoUrl: string;
  author: IAuthor;
  configurations?: IConfigurations;
  date: string;
  ratings: IRatings;
  attachFiles: IAttachFile[];
}

const initialState: PageState = {
  loading: true,
  id: "",
  contents: {
    title: "",
    briefDescription: "",
    targets: "",
    body: "",
  },
  photoUrl: "",
  author: {
    id: "",
    photoUrl: "",
    biography: "",
    username: "",
    name: "",
    subscribersCount: 0,
  },
  configurations: {
    anonymously: false,
    rating: false,
    comments: false,
    links: false,
  },
  date: "",
  ratings: {
    likes: 0,
    dislikes: 0,
  },
  attachFiles: [],
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setContents: (state, action: PayloadAction<IContents>) => {
      state.contents = action.payload;
    },
    setPhotoUrl: (state, action: PayloadAction<string>) => {
      state.photoUrl = action.payload;
    },
    setAuthor: (state, action: PayloadAction<IAuthor>) => {
      state.author = action.payload;
    },
    setSubscribersCount: (state, action: PayloadAction<number>) => {
      state.author.subscribersCount = action.payload;
    },
    setConfigurations: (state, action: PayloadAction<IConfigurations>) => {
      state.configurations = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setRatings: (state, action: PayloadAction<IRatings>) => {
      state.ratings = action.payload;
    },
    setAttachFiles: (state, action: PayloadAction<IAttachFile[]>) => {
      state.attachFiles = action.payload;
    },
  },
});

export const {
  setLoading,
  setId,
  setContents,
  setPhotoUrl,
  setAuthor,
  setSubscribersCount,
  setConfigurations,
  setDate,
  setRatings,
  setAttachFiles,
} = pageSlice.actions;

// Fetch the data needed for a public page
export const fetchPublicPage = (): AppThunk => async (dispatch) => {
  const response = (await request.get(
    `/public-pages/${window.location.pathname.split("/")[2]}`,
    {
      auth: true,
    }
  )) as any;

  dispatch(setLoading(false));
  dispatch(setId(response.page.id));
  dispatch(setContents({ title: response.page.contents.title }));
  dispatch(setPhotoUrl(response.page.photo.secure_url));
  dispatch(
    setAuthor({
      id: response.page.author._id,
      photoUrl: response.page.author.photo.secure_url,
      biography: response.page.author.biography,
      username: response.page.author.username,
      name: response.page.author.name,
      subscribersCount: response.page.author.subscribersNum,
    })
  );
  dispatch(setDate(response.page.date));
  dispatch(
    setRatings({
      likes: response.page.likes,
      dislikes: response.page.dislikes,
    })
  );
  dispatch(setAttachFiles(response.page.attachFiles));
  // From the userSlice
  dispatch(setUserId(response.viewer.id));
  dispatch(setUserStatus(response.viewer.status));
  dispatch(setUserSubscribed(response.viewer.subscribed));
  dispatch(setUserReadLater(response.viewer.readLater));
};

// Fetch the data needed for a private page
export const fetchPrivatePage = (): AppThunk => async (dispatch) => {
  try {
    const response = (await request.get(
      `/${window.location.pathname.split("/")[1]}/${
        window.location.pathname.split("/")[2]
      }`,
      {
        auth: true,
      }
    )) as any;

    dispatch(setLoading(false));
    dispatch(setId(response.page.id));
    dispatch(setContents(response.page.contents));
    dispatch(setConfigurations(response.page.configurations));
    dispatch(setPhotoUrl(response.page.photo.secure_url));
    dispatch(
      setAuthor({
        id: response.page.author._id,
        photoUrl: response.page.author.photo.secure_url,
        biography: response.page.author.biography,
        username: response.page.author.username,
        name: response.page.author.name,
        subscribersCount: response.page.author.subscribersNum,
      })
    );
    dispatch(setDate(response.page.date));
    dispatch(
      setRatings({
        likes: response.page.likes,
        dislikes: response.page.dislikes,
      })
    );
    dispatch(setAttachFiles(response.page.attachFiles));
    // From the userSlice
    dispatch(setUserId(response.viewer.id));
    dispatch(setUserStatus(response.viewer.status));
    dispatch(setUserSubscribed(response.viewer.subscribed));
    dispatch(setUserReadLater(response.viewer.readLater));
  } catch (e: any) {
    if (e.status === 404) {
      dispatch(setId("0")); // zero indicates not found
    }
  }
};

// Add a page to the read later list of a user or remove it from there
export const toggleReadLater =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      loadingModal("Loading...");

      const response = (await request.patch(`/read-later/${id}`, null, {
        auth: true,
      })) as any;

      loadingModal();

      if (response.readLater) {
        alert("Page added to the read later list.", "success");
      } else {
        alert("Page removed from the read later list.", "success");
      }

      dispatch(setUserReadLater(response.readLater));
    } catch (e: any) {
      loadingModal();
      if (e.status === 401) {
        alert("Please login to be able to add pages to the read later list.");
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

// Send a request to server to delete the page photo
export const deletePhoto = (): AppThunk => async (dispatch, getState) => {
  const { id } = getState().page;
  try {
    loadingModal("Removing the photo...");

    (await request.delete(`/pages/${id}/photo`, {
      auth: true,
    })) as any;

    loadingModal();
    alert("Photo successfully removed from your page.", "success");

    dispatch(setPhotoUrl(""));
  } catch (e: any) {
    loadingModal();
    alert("Sorry, there was problem with removing the photo.", "error");
  }
};

// Fetches the attach files of a page
export const fetchAttachFiles =
  (message: string): AppThunk =>
  async (dispatch, getState) => {
    const { id } = getState().page;
    try {
      const response = (await request.get(`/pages/${id}/attach-files`, {
        auth: true,
      })) as any;

      loadingModal();
      alert(message, "success");
      dispatch(setAttachFiles(response.attachFiles));
    } catch (error) {
      loadingModal();
    }
  };

// Send a request to server to either subscribe to or unsubscribe from the author
export const subscribe = (): AppThunk => async (dispatch, getState) => {
  const authorId = getState().page.author.id;
  const response = (await request.post(`/subscription/${authorId}`, null, {
    auth: true,
  })) as any;

  response.subNum;

  dispatch(setSubscribersCount(response.subNum));
  dispatch(setSubscribed(response.subscribed));

  if (response.subscribed) {
    alert("Successfully subscribed to the author.", "success");
  } else {
    alert("Successfully unsubscribed from the author.", "success");
  }
};

export const selectId = (state: RootState) => state.page.id;
export const selectContents = (state: RootState) => state.page.contents;
export const selectConfigurations = (state: RootState) =>
  state.page.configurations;
export const selectLoading = (state: RootState) => state.page.loading;
export const selectDate = (state: RootState) => state.page.date;
export const selectPhotoUrl = (state: RootState) => state.page.photoUrl;
export const selectAttachFiles = (state: RootState) => state.page.attachFiles;
export const selectAuthor = (state: RootState) => state.page.author;
export const selectRatings = (state: RootState) => state.page.ratings;

export default pageSlice.reducer;
