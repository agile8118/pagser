export namespace AuthAPI {
  // POST /api/username-availability
  export interface UsernameAvailabilityBody { username: string; }
  export interface UsernameAvailabilityResponse { message: string; }

  // POST /api/send-code
  export interface SendCodeBody { name: string; email: string; password: string; username: string; }
  export interface SendCodeResponse { message: string; }

  // POST /api/register
  export interface RegisterBody {
    name: string; email: string; password: string;
    username: string; userEmailVerificationCode: number;
  }
  export interface RegisterResponse { token: string; }

  // POST /api/login
  export interface LoginBody { email: string; password: string; }
  export interface LoginResponse { token: string; }

  // DELETE /api/auth
  export interface LogoutResponse { message: string; }

  // POST /api/forgot-password
  export interface ForgotPasswordBody { email: string; }
  export interface ForgotPasswordResponse { message: string; }

  // PATCH /api/reset-password
  export interface ResetPasswordBody { user_id: string; password: string; token: string; }
  export interface ResetPasswordResponse { message: string; }

  // POST /auth
  export interface GetAuthResponse { user: { id: string; photo: string | null; }; }
}
