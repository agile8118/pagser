import { Express } from "express";

// Controllers
import Authentication from "./controllers/authentication.js";
import Page from "./controllers/page.js";
import Uploader from "./controllers/uploader.js";

// Middleware
import validator from "./middleware/validator.js";
import authorization from "./middleware/authorization.js";
import { requireAuth, logTheUserIn } from "./services/passport.js";

export default (app: Express) => {
  // ------------------------------------------------ //
  // ************ AUTHENTICATION ROUTES ************* //
  // ------------------------------------------------ //

  // Checks whether or not a username is available
  app.post(
    "/api/username-availability",
    validator.username,
    validator.usernameAvailability,
    Authentication.usernameAvailability
  );

  // Send a code to the user email address to verify that user owns the email
  app.post(
    "/api/send-code",
    validator.name,
    validator.email,
    validator.emailAvailability,
    validator.password,
    validator.username,
    validator.usernameAvailability,
    Authentication.sendCode
  );

  // Registers a user and sends back a token
  app.post(
    "/api/register",
    validator.name,
    validator.email,
    validator.emailAvailability,
    validator.password,
    validator.username,
    validator.usernameAvailability,
    validator.userEmailVerificationCode,
    Authentication.register
  );

  // Logs a user in and sends back a token
  app.post("/api/login", logTheUserIn, Authentication.login);

  // Sends a link to user's email to use for resetting their password
  app.post(
    "/api/forgot-password",
    validator.email,
    Authentication.forgotPassword
  );

  // Using the token that waws sent in their email address, reset their password and update the database
  app.patch(
    "/api/reset-password",
    validator.isBodyUserId,
    validator.password,
    validator.passwordResetToken,
    Authentication.resetPassword
  );

  // Checks whether or not the user is authenticated, returns user id and photo if so
  app.post("/auth", requireAuth, Authentication.getAuth);

  // ------------------------------------------------- //
  // ***************** PAGE ROUTES ****************** //
  // ------------------------------------------------ //
  // ---- Unique for draft pages ---- //
  // Create a new draft page
  app.post("/api/new-page", requireAuth, Page.newDraftPage);

  // Get the info of a draft page
  app.get(
    "/api/new-page/:stage/:id",
    requireAuth,
    validator.isId,
    validator.isStage,
    authorization.draftPageOwnership,
    Page.fetchDraftPageData
  );

  // Update or create a draft page
  app.patch(
    "/api/new-page/:stage/:id",
    requireAuth,
    validator.isId,
    validator.isStage,
    authorization.draftPageOwnership,
    Page.updateDraftPageData
  );

  // Create a page from a draft page
  // app.post("/api/new-page/:id", requireAuth, Page.create);

  // ---- Shared for draft and published pages ---- //
  // Upload a new page thumbnail for a page
  app.put(
    "/api/pages/:id/photo",
    requireAuth,
    authorization.pageOwnership,
    Uploader.uploadPagePhoto
  );

  // Remove the page thumbnail of a pge
  app.delete(
    "/api/pages/:id/photo",
    requireAuth,
    authorization.pageOwnership,
    Page.removePagePhoto
  );

  // Get attach files for either a draft or published page
  app.get("/api/pages/:id/attach-files", Page.getAttachFiles);

  // Add an attach file to a page
  app.post(
    "/api/pages/:id/attach-files",
    requireAuth,
    authorization.pageOwnership,
    Uploader.uploadPageAttachFile
  );

  // Get one attach file
  app.get("/api/pages/:id/attach-files/:name", Page.getAttachFile);

  // Delete an attach file
  // app.delete(
  //   "/api/pages/:id/attach-files/:fileId",
  //   requireAuth,
  //   authorization.pageOwnership,
  //   Page.deleteAttachFile
  // );
};
