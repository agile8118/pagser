export namespace ProfileAPI {
  export interface UserLinks {
    website: string; facebook: string;
    youtube: string; twitter: string; linkedin: string;
  }

  export interface ProfileUser {
    id: string; name: string; username: string; email: string;
    biography?: string | null; headline?: string | null;
    photo_key?: string | null; photo_url?: string | null;
    verified?: boolean; created_at: Date | string;
    links_website?: string | null; links_facebook?: string | null;
    links_youtube?: string | null; links_twitter?: string | null;
    links_linkedin?: string | null;
    links: UserLinks;
  }

  // GET /api/profile
  export interface GetProfileResponse { user: ProfileUser; }

  // PATCH /api/profile
  export interface UpdateProfileBody {
    name: string; headline: string; biography: string;
    links: UserLinks;
  }
  export interface UpdateProfileResponse { user: ProfileUser; }

  // PUT /api/profile/photo
  export interface UploadProfilePhotoResponse { message: string; image: string; }
}
