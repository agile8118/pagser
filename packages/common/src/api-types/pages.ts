export namespace PagesAPI {
  export interface AttachFile { id: number; name: string; url: string; }

  export interface PageAuthor {
    id: string; name: string; username: string; biography: string;
    photoUrl: string | null; subscribersCount: number;
  }

  export interface Viewer {
    status: "spectator" | "authenticated" | "owner";
    id: string | undefined;
    readLater?: boolean;
    subscribed?: boolean;
  }

  // POST /api/new-page
  export interface NewDraftPageBody { page: { type: "public" | "private"; }; }
  export interface NewDraftPageResponse { id: string; message: string; }

  // GET /api/new-page/initial-step/:id
  export interface FetchDraftInitialStepResponse { type: "public" | "private"; }

  // GET /api/new-page/page-contents/:id
  export interface FetchDraftPageContentsResponse {
    page: {
      id: string; type: "public" | "private";
      title: string | null; brief_description: string | null;
      targets: string | null; body: string | null;
    };
  }

  // GET /api/new-page/page-thumbnail/:id
  export interface FetchDraftPageThumbnailResponse {
    page: {
      id: string;
      cropped_photo_key?: string | null; cropped_photo_url?: string | null;
      photo_key?: string | null; photo_url?: string | null;
    };
  }

  // GET /api/new-page/final-step/:id
  export interface FetchDraftFinalStepResponse {
    page: {
      id: string; type: "public" | "private";
      anonymously: boolean; comments_disabled: boolean;
      ratings_disabled: boolean; links_disabled: boolean;
      url: string | null; user_id: number; user_username: string;
    };
    urls: { url?: string | null; }[];
    tags: { id: number; name: string; }[];
  }

  // PATCH /api/new-page/:stage/:id
  export interface UpdateDraftPageResponse { id: string; message: string; }

  // POST /api/new-page/:id (publish)
  export interface PublishPageResponse { url: string; username: string; }

  // DELETE /api/pages/:id/photo
  export interface RemovePagePhotoResponse { message: string; }

  // GET /api/pages/:id/attach-files
  export interface GetAttachFilesResponse { attachFiles: AttachFile[]; }

  // DELETE /api/pages/:id/attach-files/:fileId
  export interface DeleteAttachFileResponse { message: string; }

  // GET /api/public-pages/:url
  export interface FetchPublicPageResponse {
    page: {
      id: string;
      contents: { title: string; briefDescription: string; targets: string; body: string; };
      photoUrl: string | null;
      anonymously: boolean;
      comments_disabled: boolean;
      ratings_disabled: boolean;
      links_disabled: boolean;
      date: string;
      likes: number;
      dislikes: number;
      attachFiles: AttachFile[];
      author: PageAuthor;
    };
    viewer: Viewer;
  }

  // GET /api/:username/:url
  export interface FetchPrivatePageResponse {
    page: {
      id: string;
      contents: { title: string; briefDescription: string; targets: string; body: string; };
      photoUrl: string | null;
      anonymously: boolean;
      comments_disabled: boolean;
      ratings_disabled: boolean;
      links_disabled: boolean;
      date: string;
      likes: number;
      dislikes: number;
      attachFiles: AttachFile[];
      author: PageAuthor;
    };
    viewer: Viewer;
  }

  // GET /api/pages/:id/edit and GET /api/:username/:url/edit
  export interface EditPageData {
    id: string; type_id: number; status_id: number;
    title: string | null; brief_description: string | null;
    targets: string | null; body: string | null;
    anonymously: boolean; comments_disabled: boolean;
    ratings_disabled: boolean; links_disabled: boolean;
    url: string | null;
    photo_key: string | null; photo_url: string | null;
    cropped_photo_key: string | null; cropped_photo_url: string | null;
    user_id: number; created_at: string; updated_at: string;
    type: "public" | "private";
    tags: string[];
  }
  export interface FetchEditPageResponse { page: EditPageData; usedUrls: string[]; }

  // PUT /api/pages/:id
  export interface UpdatePageBody {
    page: {
      title: string; briefDes: string; body: string; targets?: string;
      tags?: string[]; url?: string;
      anonymously?: boolean;
      comments_disabled?: boolean;
      ratings_disabled?: boolean;
      links_disabled?: boolean;
    };
  }
  export interface UpdatePageResponse { url: string; type: "public" | "private"; username: string; }

  // DELETE /api/pages/:id
  export interface DeletePageResponse { message: string; }
}
