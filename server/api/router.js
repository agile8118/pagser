const Authentication = require("./controllers/authentication");
const Controller = require("./controllers");
const Profile = require("./controllers/Profile");
const Settings = require("./controllers/Settings");
const Page = require("./controllers/page");
const Comment = require("./controllers/comment");
const Subscription = require("./controllers/subscription");
const ReadLater = require("./controllers/readLater");
const History = require("./controllers/history");
const Collection = require("./controllers/collection");
const Rating = require("./controllers/rating");
const UserPages = require("./controllers/userPages");
const passportService = require("./services/passport");
const passport = require("passport");
const validate = require("../middleware/validate");
const middleware = require("../middleware");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = (app) => {
  // *********** INDEX ROUTES *********** //
  app.post("/auth", requireAuth, Controller.getAuth);

  // *********** AUTHENTICATION ROUTES *********** //
  app.post(
    "/register",
    validate.name,
    validate.email,
    validate.password,
    validate.username,
    validate.emailNotExisted,
    validate.usernameNotExisted,
    validate.code,
    Authentication.signup
  );
  app.post("/register/validatecode", validate.code, (req, res) => {
    res.send("ok");
  });
  app.post("/login", requireSignin, Authentication.signin);
  app.post(
    "/usernameAvailability",
    validate.username,
    Authentication.usernameAvailability
  );
  app.post("/api/forgotpassword", Authentication.forgotPasswordRequest);
  app.post(
    "/api/resetpassword",
    validate.password,
    validate.token,
    Authentication.resetPassword
  );
  // send a code to user email address to verify that user own the email
  app.post(
    "/api/sendcode",
    validate.name,
    validate.email,
    validate.password,
    validate.username,
    validate.emailNotExisted,
    validate.usernameNotExisted,
    Authentication.sendCode
  );
  // send username
  app.post("/api/auth", requireAuth, (req, res) => {
    res.send(req.user);
  });

  // *********** PROFILE ROUTES *********** //
  app.get("/api/profile", requireAuth, Profile.fetchUserData);
  app.patch(
    "/api/profile",
    requireAuth,
    validate.name,
    validate.headline,
    validate.biography,
    validate.links,
    Profile.updateUserData
  );
  app.put("/api/profile/photo", requireAuth, Profile.uploadUserImage);

  // *********** SETTINGS ROUTES *********** //
  app.get("/api/settings/email", requireAuth, Settings.fetchUserEmail);
  app.patch("/api/settings/email", requireAuth, Settings.updateUserEmail);
  app.patch(
    "/api/settings/password",
    requireAuth,
    validate.password,
    Settings.updateUserPassword
  );

  // *********** USER'S PAGES MANAGER ROUTES *********** //
  app.get(
    "/api/user-pages/published",
    requireAuth,
    UserPages.fetchPublishedPages
  );
  app.get("/api/user-pages/draft", requireAuth, UserPages.fetchDraftPages);
  app.delete("/api/user-pages/draft", requireAuth, UserPages.deleteDraftPages);

  // *********** SUBSCRIPTIONS ROUTES *********** //
  // Subscribe or onsubscribe the user
  app.post("/api/subscription/:id", requireAuth, Subscription.toggle);

  // *********** READ LATER ROUTES *********** //
  app.patch("/api/read-later/:id", requireAuth, validate.id, ReadLater.toggle);
  app.delete("/api/read-later", requireAuth, ReadLater.remove);
  app.get("/api/read-later/", requireAuth, ReadLater.fetch);

  // *********** HISTORY ROUTES *********** //
  app.get("/api/history/", requireAuth, History.fetch);
  app.delete("/api/history", requireAuth, History.remove);

  // *********** RATING ROUTES *********** //
  app.patch("/api/rate/page/:id", requireAuth, Rating.ratePage);
  app.get("/api/liked-pages/", requireAuth, Rating.fetchLikedPages);

  // *********** COLLECTION ROUTES *********** //
  app.get(
    "/api/collection/:id",
    validate.id,
    middleware.checkCLPrivacy,
    Collection.fetchOne
  );
  // Add or remove the page from the selected collection
  app.post(
    "/api/collection/add-remove/:id/:pageId",
    requireAuth,
    Collection.AddRemovePage
  );
  app.post("/api/collection", requireAuth, Collection.create);
  // Save or remove a collection created by others to user library
  app.post(
    "/api/collection/toggle-library/:id",
    requireAuth,
    Collection.toggleLibrary
  );
  // Make the collection either public or private
  app.post("/api/collection/sharing/:id", requireAuth, Collection.sharing);
  // Add a new photo or change the collection photo
  app.put("/api/collection/photo/:id", requireAuth, Collection.photo);

  app.get("/api/collections/created", requireAuth, Collection.fetchCreated);
  // Fetch collection for add to collection modal (for add page)
  app.get(
    "/api/collections/created/:pageId",
    requireAuth,
    Collection.fetchCreatedFAP
  );
  app.get("/api/collections/saved", requireAuth, Collection.fetchSaved);
  app.get(
    "/api/collections/created-saved",
    requireAuth,
    Collection.fetchCreatedAndSaved
  );
  // app.get("/api/collections/shared", requireAuth, Collection.fetchShared);

  // *********** NEW PAGE ROUTES *********** //
  app.get(
    "/api/new-page/:stage/:id",
    requireAuth,
    middleware.checkDraftPageOwnership,
    Page.fetchDraftPageData
  );

  app.patch(
    "/api/new-page/:stage/:id",
    requireAuth,
    middleware.checkDraftPageOwnership,
    Page.updateDraftPageData
  );
  app.post("/api/new-page/:id", requireAuth, Page.create);

  // *********** PAGE ROUTES *********** //
  app.get("/api/public-pages/:url", Page.fetchPublicPageData);
  app.put(
    "/api/pages/:id/photo",
    requireAuth,
    middleware.checkPageOwnership,
    Page.uploadPagePhoto
  );
  app.put(
    "/api/pages/:id",
    requireAuth,
    middleware.checkPageOwnership,
    Page.updatePage
  );
  app.delete(
    "/api/pages/:id/photo",
    requireAuth,
    middleware.checkPageOwnership,
    Page.removePagePhoto
  );
  app.delete(
    "/api/pages/:id",
    requireAuth,
    middleware.checkPageOwnership,
    Page.delete
  );
  app.get("/api/pages/:url/edit", requireAuth, Page.fetchEditPageData);
  app.get("/api/:username/:url/edit", requireAuth, Page.fetchEditPageData);
  app.get("/api/:username/:url", Page.fetchPrivatePageData);

  // get one attach file
  app.get("/api/pages/:id/attach-files/:name", Page.getAttachFile);

  // get attach files
  app.get("/api/pages/:id/attach-files", Page.getAttachFiles);

  // delete an attach file
  app.delete(
    "/api/pages/:id/attach-files/:fileId",
    requireAuth,
    middleware.checkPageOwnership,
    Page.deleteAttachFile
  );

  // add an attach file to a page
  app.post(
    "/api/pages/:id/attach-files",
    requireAuth,
    middleware.checkPageOwnership,
    Page.addAttachFile
  );

  // *********** COMMENT ROUTES *********** //
  app.get("/api/pages/:id/comments", Comment.fetchComments);
  app.post("/api/pages/:id/comments", requireAuth, Comment.addComment);
  app.put(
    "/api/pages/:id/comments/:commentid",
    requireAuth,
    middleware.checkCommentOwnership,
    Comment.updateComment
  );
  app.delete(
    "/api/pages/:id/comments/:commentid",
    requireAuth,
    middleware.checkCommentOwnership,
    Comment.deleteComment
  );
};
