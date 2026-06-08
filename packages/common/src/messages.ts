import { CODE_EXPIRY_MINUTES, RESET_LINK_EXPIRY_HOURS } from "./constants";

export const ApiMessages = {
  USERNAME_AVAILABLE: "ok",

  INVALID_ID: "Invalid ID.",
  INVALID_NAME: "Please enter a valid name between 3 and 30 letters.",
  INVALID_USERNAME: "Please enter a valid username between 5 and 15 characters.",
  USERNAME_IN_USE: "This username is already taken.",
  INVALID_EMAIL: "Please enter a valid email address.",
  EMAIL_IN_USE: "This email is already in use.",
  CREDENTIALS_REQUIRED: "Email and password are required.",
  INCORRECT_CREDENTIALS: "Incorrect password or email address.",
  INVALID_PASSWORD: "Password must be 8 to 30 characters and include letters and numbers.",
  INVALID_CODE: "The verification code is invalid or has expired.",
  TOO_MANY_ATTEMPTS: "Too many incorrect attempts. Please request a new code.",
  INVALID_LINK: "This link is invalid. Please make sure you're using the exact link we sent to your email.",
  LINK_EXPIRED: `This link has expired. Please request a new password reset — links are valid for ${RESET_LINK_EXPIRY_HOURS} hours.`,
  INVALID_PAGE_STAGE: "Invalid page stage.",
  INVALID_PAGE_TYPE: "Invalid page type.",
  INVALID_PAGE_CONTENTS: "Some page content is invalid. Please review your title, description, and body.",
  INVALID_PAGE_CONFIG: "Page configuration is invalid.",
  INVALID_PAGE_TAGS: "Page tags are invalid.",
  INVALID_PAGE_URL: "This page URL is invalid or already in use.",

  CODE_SENT: "code sent",
  RESET_LINK_SENT: "A reset link has been sent to your email.",
  PASSWORD_UPDATED: "password updated",
  LOGGED_OUT: "logged out",
  NO_EMAIL_FOUND: "No account with that email address was found.",

  PAGE_NOT_FOUND: "Page not found",

  IMAGE_UPLOADED: "image-uploaded",
  FILE_UPLOADED: "file uploaded",

  SUCCESS: "success",
} as const;
