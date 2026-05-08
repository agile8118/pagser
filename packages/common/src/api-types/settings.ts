export namespace SettingsAPI {
  // GET /api/settings/email
  export interface GetEmailResponse { email: string; }

  // PATCH /api/settings/email
  export interface UpdateEmailBody { email: string; }
  export interface UpdateEmailResponse { message: string; }

  // PATCH /api/settings/password
  export interface UpdatePasswordBody { password: string; }
  export interface UpdatePasswordResponse { message: string; }
}
