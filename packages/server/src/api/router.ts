import { Express } from "express";

// Controllers
import Authentication from "./controllers/authentication.js";
import Page from "./controllers/page.js";
import Uploader from "./controllers/uploader.js";
import UserPages from "./controllers/userPages.js";
import History from "./controllers/history.js";
import ReadLater from "./controllers/readLater.js";
import Rating from "./controllers/rating.js";
import Subscription from "./controllers/subscription.js";
import Profile from "./controllers/profile.js";
import Settings from "./controllers/settings.js";
import PublicProfile from "./controllers/publicProfile.js";
import Collection from "./controllers/collection.js";
import Comment from "./controllers/comment.js";
import Analytics from "./controllers/analytics.js";

// Middleware
import validator from "./middleware/validator.js";
import authorization from "./middleware/authorization.js";
import { requireAuth, logTheUserIn, optionalAuth } from "./services/passport.js";

export default (app: Express) => {
  // ================================================ //
  // ============= AUTHENTICATION ROUTES =========== //
  // ================================================ //

  app.post(
    "/api/username-availability",
    validator.username,
    validator.usernameAvailability,
    Authentication.usernameAvailability,
  );

  app.post(
    "/api/send-code",
    validator.name,
    validator.email,
    validator.emailAvailability,
    validator.password,
    validator.username,
    validator.usernameAvailability,
    Authentication.sendCode,
  );

  app.post(
    "/api/register",
    validator.name,
    validator.email,
    validator.emailAvailability,
    validator.password,
    validator.username,
    validator.usernameAvailability,
    validator.userEmailVerificationCode,
    Authentication.register,
  );

  app.post("/api/login", logTheUserIn, Authentication.login);

  app.post(
    "/api/forgot-password",
    validator.email,
    Authentication.forgotPassword,
  );

  app.patch(
    "/api/reset-password",
    validator.isBodyUserId,
    validator.password,
    validator.passwordResetToken,
    Authentication.resetPassword,
  );

  app.post("/auth", requireAuth, Authentication.getAuth);

  // ================================================ //
  // ================= PAGE ROUTES ================= //
  // ================================================ //

  // ---- Draft Pages ---- //
  app.post("/api/new-page", requireAuth, Page.newDraftPage);

  app.get(
    "/api/new-page/:stage/:id",
    requireAuth,
    validator.isId,
    validator.isStage,
    authorization.draftPageOwnership,
    Page.fetchDraftPageData,
  );

  app.patch(
    "/api/new-page/:stage/:id",
    requireAuth,
    authorization.draftPageOwnership,
    validator.isId,
    validator.isStage,
    validator.pageType,
    Page.updateDraftPageData,
  );

  app.post(
    "/api/new-page/:id",
    requireAuth,
    authorization.draftPageOwnership,
    Page.publish,
  );

  // ---- Page Photos & Attachments ---- //
  app.put(
    "/api/pages/:id/photo",
    requireAuth,
    authorization.pageOwnership,
    Uploader.uploadPagePhoto,
  );

  app.delete(
    "/api/pages/:id/photo",
    requireAuth,
    authorization.pageOwnership,
    Page.removePagePhoto,
  );

  app.get("/api/pages/:id/attach-files", Page.getAttachFiles);

  app.post(
    "/api/pages/:id/attach-files",
    requireAuth,
    authorization.pageOwnership,
    Uploader.uploadPageAttachFile,
  );

  app.get("/api/pages/:id/attach-files/:name", Page.getAttachFile);

  app.delete(
    "/api/pages/:id/attach-files/:fileId",
    requireAuth,
    authorization.pageOwnership,
    Page.deleteAttachFile,
  );

  // ---- User Pages Manager ---- //
  app.get(
    "/api/user-pages/published",
    requireAuth,
    UserPages.fetchPublishedPages,
  );

  app.delete(
    "/api/user-pages/published",
    requireAuth,
    UserPages.deletePublishedPages,
  );

  app.get("/api/user-pages/draft", requireAuth, UserPages.fetchDraftPages);

  app.delete("/api/user-pages/draft", requireAuth, UserPages.deleteDraftPages);

  // ---- Published Page Management ---- //
  app.get("/api/pages/:id/edit", requireAuth, Page.fetchEditPageData);

  app.put("/api/pages/:id", requireAuth, Page.updatePage);

  app.delete("/api/pages/:id", requireAuth, Page.deletePage);

  // ================================================ //
  // =============== COMMENT ROUTES ================ //
  // ================================================ //

  app.post("/api/comment/:pageId", requireAuth, Comment.addComment);
  app.get("/api/comments/history", requireAuth, Comment.commentsHistory);
  app.get("/api/comments/:pageId", optionalAuth, Comment.fetchComments);
  app.get("/api/comment/:id/replies", optionalAuth, Comment.fetchReplies);
  app.put("/api/comment/:id", requireAuth, Comment.updateComment);
  app.delete("/api/comment/:id", requireAuth, Comment.deleteComment);

  // ================================================ //
  // =============== HISTORY ROUTES ================ //
  // ================================================ //

  app.get("/api/history/", requireAuth, History.fetch);
  app.delete("/api/history", requireAuth, History.remove);

  // ================================================ //
  // =============== READ LATER ROUTES ============= //
  // ================================================ //

  app.patch("/api/read-later/:id", requireAuth, ReadLater.toggle);
  app.delete("/api/read-later", requireAuth, ReadLater.remove);
  app.get("/api/read-later/", requireAuth, ReadLater.fetch);

  // ================================================ //
  // ================ RATING ROUTES ================ //
  // ================================================ //

  app.patch("/api/rate/page/:id", requireAuth, Rating.ratePage);
  app.patch("/api/rate/comment/:id", requireAuth, Rating.rateComment);
  app.get("/api/liked-pages/", requireAuth, Rating.fetchLikedPages);
  app.delete("/api/liked-pages", requireAuth, Rating.removeLikedPages);

  // ================================================ //
  // ============= SUBSCRIPTION ROUTES ============= //
  // ================================================ //

  app.post("/api/subscription/:id", requireAuth, Subscription.toggle);
  app.get("/api/subscriptions", requireAuth, Subscription.fetchSubscriptions);

  // ================================================ //
  // =============== PROFILE ROUTES ================ //
  // ================================================ //

  app.get("/api/profile", requireAuth, Profile.fetchUserData);
  app.patch("/api/profile", requireAuth, Profile.updateUserData);
  app.put("/api/profile/photo", requireAuth, Profile.uploadUserImage);

  // ================================================ //
  // =============== SETTINGS ROUTES =============== //
  // ================================================ //

  app.get("/api/settings/email", requireAuth, Settings.fetchUserEmail);
  app.patch("/api/settings/email", requireAuth, Settings.updateUserEmail);
  app.patch("/api/settings/password", requireAuth, Settings.updateUserPassword);

  // ================================================ //
  // ============= PUBLIC PROFILE ROUTES =========== //
  // ================================================ //

  app.get("/api/users/:username/pages", PublicProfile.fetchPages);
  app.get("/api/users/:username/collections", PublicProfile.fetchCollections);

  // ================================================ //
  // =============== COLLECTION ROUTES ============= //
  // ================================================ //

  app.post("/api/collection", requireAuth, Collection.create);
  app.get("/api/collection/:id", optionalAuth, Collection.fetchOne);
  app.post(
    "/api/collection/add-remove/:id/:pageId",
    requireAuth,
    Collection.addRemovePage,
  );
  app.post(
    "/api/collection/toggle-library/:id",
    requireAuth,
    Collection.toggleLibrary,
  );
  app.post("/api/collection/sharing/:id", requireAuth, Collection.sharing);
  app.put("/api/collection/photo/:id", requireAuth, Collection.uploadPhoto);
  app.put("/api/collection/info/:id", requireAuth, Collection.updateInfo);
  app.put(
    "/api/collection/remove-pages/:id",
    requireAuth,
    Collection.removePages,
  );
  app.delete("/api/collection/:id", requireAuth, Collection.deleteCollection);
  app.get("/api/collections/created", requireAuth, Collection.fetchCreated);
  app.get(
    "/api/collections/created/:pageId",
    requireAuth,
    Collection.fetchCreatedFAP,
  );
  app.get(
    "/api/collections/created-saved",
    requireAuth,
    Collection.fetchCreatedAndSaved,
  );
  app.get("/api/collections/saved", requireAuth, Collection.fetchSaved);
  app.get("/api/collections/shared/:username", Collection.fetchShared);

  // ================================================ //
  // =============== ANALYTICS ROUTES ============== //
  // ================================================ //

  app.post("/api/views/:id", Analytics.trackView);

  // ---- Public/Private Page Viewing (Wildcard Routes - must come last) ---- //
  app.get("/api/public-pages/:url", optionalAuth, Page.fetchPublicPageData);

  app.get("/api/:username/:url", requireAuth, Page.fetchPrivatePageData);

  app.get("/api/:username/:url/edit", requireAuth, Page.fetchEditPageData);
};
