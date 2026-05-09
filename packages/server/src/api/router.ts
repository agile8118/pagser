import type {
  Cpeak,
  CpeakRequest as Request,
  CpeakResponse as Response,
  HandleErr,
} from "cpeak";

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
import {
  requireAuth,
  logTheUserIn,
  optionalAuth,
} from "./services/guards.js";

export default (app: Cpeak) => {
  // ================================================ //
  // ============= AUTHENTICATION ROUTES =========== //
  // ================================================ //

  app.route(
    "post",
    "/api/username-availability",
    validator.username,
    validator.usernameAvailability,
    Authentication.usernameAvailability,
  );

  app.route(
    "post",
    "/api/send-code",
    validator.name,
    validator.email,
    validator.emailAvailability,
    validator.password,
    validator.username,
    validator.usernameAvailability,
    Authentication.sendCode,
  );

  app.route(
    "post",
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

  app.route("post", "/api/login", validator.loginCredentials, logTheUserIn, Authentication.login);
  app.route("delete", "/api/auth", Authentication.logout);

  app.route(
    "post",
    "/api/forgot-password",
    validator.email,
    Authentication.forgotPassword,
  );

  app.route(
    "patch",
    "/api/reset-password",
    validator.isBodyUserId,
    validator.password,
    validator.passwordResetToken,
    Authentication.resetPassword,
  );

  app.route("post", "/auth", requireAuth, Authentication.getAuth);

  // ================================================ //
  // ================= PAGE ROUTES ================= //
  // ================================================ //

  // ---- Draft Pages ---- //
  app.route("post", "/api/new-page", requireAuth, Page.newDraftPage);

  app.route(
    "get",
    "/api/new-page/:stage/:id",
    requireAuth,
    validator.isId,
    validator.isStage,
    authorization.draftPageOwnership,
    Page.fetchDraftPageData,
  );

  app.route(
    "patch",
    "/api/new-page/:stage/:id",
    requireAuth,
    authorization.draftPageOwnership,
    validator.isId,
    validator.isStage,
    validator.pageType,
    Page.updateDraftPageData,
  );

  app.route(
    "post",
    "/api/new-page/:id",
    requireAuth,
    authorization.draftPageOwnership,
    Page.publish,
  );

  // ---- Page Photos & Attachments ---- //
  app.route(
    "put",
    "/api/pages/:id/photo",
    requireAuth,
    authorization.pageOwnership,
    Uploader.uploadPagePhoto,
  );

  app.route(
    "delete",
    "/api/pages/:id/photo",
    requireAuth,
    authorization.pageOwnership,
    Page.removePagePhoto,
  );

  app.route(
    "post",
    "/api/pages/:id/body-image",
    requireAuth,
    Uploader.uploadBodyImage,
  );

  app.route("get", "/api/pages/:id/attach-files", Page.getAttachFiles);

  app.route(
    "post",
    "/api/pages/:id/attach-files",
    requireAuth,
    authorization.pageOwnership,
    Uploader.uploadPageAttachFile,
  );

  app.route("get", "/api/pages/:id/attach-files/:name", Page.getAttachFile);

  app.route(
    "delete",
    "/api/pages/:id/attach-files/:fileId",
    requireAuth,
    authorization.pageOwnership,
    Page.deleteAttachFile,
  );

  // ---- User Pages Manager ---- //
  app.route(
    "get",
    "/api/user-pages/published",
    requireAuth,
    UserPages.fetchPublishedPages,
  );

  app.route(
    "delete",
    "/api/user-pages/published",
    requireAuth,
    UserPages.deletePublishedPages,
  );

  app.route(
    "get",
    "/api/user-pages/draft",
    requireAuth,
    UserPages.fetchDraftPages,
  );

  app.route(
    "delete",
    "/api/user-pages/draft",
    requireAuth,
    UserPages.deleteDraftPages,
  );

  // ---- Published Page Management ---- //
  app.route("get", "/api/pages/:id/edit", requireAuth, Page.fetchEditPageData);

  app.route("put", "/api/pages/:id", requireAuth, Page.updatePage);

  app.route("delete", "/api/pages/:id", requireAuth, Page.deletePage);

  // ================================================ //
  // =============== COMMENT ROUTES ================ //
  // ================================================ //

  app.route("post", "/api/comment/:pageId", requireAuth, Comment.addComment);
  app.route(
    "get",
    "/api/comments/history",
    requireAuth,
    Comment.commentsHistory,
  );
  app.route(
    "get",
    "/api/comments/:pageId",
    optionalAuth,
    Comment.fetchComments,
  );
  app.route(
    "get",
    "/api/comment/:id/replies",
    optionalAuth,
    Comment.fetchReplies,
  );
  app.route("put", "/api/comment/:id", requireAuth, Comment.updateComment);
  app.route("delete", "/api/comment/:id", requireAuth, Comment.deleteComment);

  // ================================================ //
  // =============== HISTORY ROUTES ================ //
  // ================================================ //

  app.route("get", "/api/history", requireAuth, History.fetch);
  app.route("delete", "/api/history", requireAuth, History.remove);

  // ================================================ //
  // =============== READ LATER ROUTES ============= //
  // ================================================ //

  app.route("patch", "/api/read-later/:id", requireAuth, ReadLater.toggle);
  app.route("delete", "/api/read-later", requireAuth, ReadLater.remove);
  app.route("get", "/api/read-later", requireAuth, ReadLater.fetch);

  // ================================================ //
  // ================ RATING ROUTES ================ //
  // ================================================ //

  app.route("patch", "/api/rate/page/:id", requireAuth, Rating.ratePage);
  app.route("patch", "/api/rate/comment/:id", requireAuth, Rating.rateComment);
  app.route("get", "/api/liked-pages", requireAuth, Rating.fetchLikedPages);
  app.route("delete", "/api/liked-pages", requireAuth, Rating.removeLikedPages);

  // ================================================ //
  // ============= SUBSCRIPTION ROUTES ============= //
  // ================================================ //

  app.route("post", "/api/subscription/:id", requireAuth, Subscription.toggle);
  app.route(
    "get",
    "/api/subscriptions",
    requireAuth,
    Subscription.fetchSubscriptions,
  );

  // ================================================ //
  // =============== PROFILE ROUTES ================ //
  // ================================================ //

  app.route("get", "/api/profile", requireAuth, Profile.fetchUserData);
  app.route("patch", "/api/profile", requireAuth, Profile.updateUserData);
  app.route("put", "/api/profile/photo", requireAuth, Uploader.uploadUserPhoto);

  // ================================================ //
  // =============== SETTINGS ROUTES =============== //
  // ================================================ //

  app.route("get", "/api/settings/email", requireAuth, Settings.fetchUserEmail);
  app.route(
    "patch",
    "/api/settings/email",
    requireAuth,
    Settings.updateUserEmail,
  );
  app.route(
    "patch",
    "/api/settings/password",
    requireAuth,
    Settings.updateUserPassword,
  );

  // ================================================ //
  // ============= PUBLIC PROFILE ROUTES =========== //
  // ================================================ //

  app.route("get", "/api/users/:username/pages", PublicProfile.fetchPages);
  app.route(
    "get",
    "/api/users/:username/collections",
    PublicProfile.fetchCollections,
  );

  // ================================================ //
  // =============== COLLECTION ROUTES ============= //
  // ================================================ //

  app.route("post", "/api/collection", requireAuth, Collection.create);
  app.route("get", "/api/collection/:id", optionalAuth, Collection.fetchOne);
  app.route(
    "post",
    "/api/collection/add-remove/:id/:pageId",
    requireAuth,
    Collection.addRemovePage,
  );
  app.route(
    "post",
    "/api/collection/toggle-library/:id",
    requireAuth,
    Collection.toggleLibrary,
  );
  app.route(
    "post",
    "/api/collection/sharing/:id",
    requireAuth,
    Collection.sharing,
  );
  app.route(
    "put",
    "/api/collection/photo/:id",
    requireAuth,
    Uploader.uploadCollectionPhoto,
  );
  app.route(
    "put",
    "/api/collection/info/:id",
    requireAuth,
    Collection.updateInfo,
  );
  app.route(
    "put",
    "/api/collection/remove-pages/:id",
    requireAuth,
    Collection.removePages,
  );
  app.route(
    "delete",
    "/api/collection/:id",
    requireAuth,
    Collection.deleteCollection,
  );
  app.route(
    "get",
    "/api/collections/created",
    requireAuth,
    Collection.fetchCreated,
  );
  app.route(
    "get",
    "/api/collections/created/:pageId",
    requireAuth,
    Collection.fetchCreatedFAP,
  );
  app.route(
    "get",
    "/api/collections/created-saved",
    requireAuth,
    Collection.fetchCreatedAndSaved,
  );
  app.route(
    "get",
    "/api/collections/saved",
    requireAuth,
    Collection.fetchSaved,
  );
  app.route("get", "/api/collections/shared/:username", Collection.fetchShared);

  // ================================================ //
  // =============== ANALYTICS ROUTES ============== //
  // ================================================ //

  app.route("post", "/api/views/:id", optionalAuth, Analytics.trackView);

  // ---- Public/Private Page Viewing (Wildcard Routes - must come last) ---- //
  app.route(
    "get",
    "/api/public-pages/:url",
    optionalAuth,
    Page.fetchPublicPageData,
  );

  app.route(
    "get",
    "/api/:username/:url",
    optionalAuth,
    Page.fetchPrivatePageData,
  );

  app.route(
    "get",
    "/api/:username/:url/edit",
    requireAuth,
    Page.fetchEditPageData,
  );

};
