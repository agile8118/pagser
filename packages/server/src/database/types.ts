export type TTables = "users" | "pages" | "tags" | "attach_files";

export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  biography?: string;
  headline?: string;
  links_website?: string;
  links_facebook?: string;
  links_youtube?: string;
  links_twitter?: string;
  links_linkedin?: string;
  photo_key?: string;
  photo_url?: string;
  verified?: boolean;
  token_code?: string;
  token_date?: Date;
  created_at: Date;
}

export interface IPageType {
  id: number;
  type: "public" | "private";
}

export interface IPageStatus {
  id: number;
  status: "published" | "draft";
}

export interface IPage {
  id: string;
  type_id: number;
  status_id: number;
  title?: string;
  brief_description?: string;
  targets?: string;
  body?: string;
  anonymously?: boolean;
  comments_disabled?: boolean;
  ratings_disabled?: boolean;
  links_disabled?: boolean;
  url?: string;
  cropped_photo_key?: string;
  cropped_photo_url?: string;
  photo_key?: string;
  photo_url?: string;
  user_id: number;
  created_at: Date;
}

export interface IAttachFile {
  id: number;
  key: string;
  name: string;
  url: string;
  page_id: number;
}

export interface ITag {
  id: number;
  page_id: number;
  name: string;
}

// These should reflect exactly what we have in database
// One use case for these would be to eliminate the need for a query to database
// each time we need something static such as the page type or status

export const PAGE_STATUS = {
  published: "published",
  publishedId: 1,
  draft: "draft",
  draftId: 2,
};

export const PAGE_TYPE = {
  private: "private",
  privateId: 1,
  public: "public",
  publicId: 2,
};
