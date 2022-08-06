export type TTables = "users" | "pages";

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

export interface IPage {
  type: "public" | "private";
}
