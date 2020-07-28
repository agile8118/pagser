const Authentication = require("./controllers/authentication");
const Controller = require("./controllers");
const Profile = require("./controllers/profile");
const Settings = require("./controllers/settings");
const Page = require("./controllers/page");
const Comment = require("./controllers/comment");
const Subscription = require("./controllers/subscription");
const ReadLater = require("./controllers/readLater");
const PB = require("./controllers/publicProfile");
const History = require("./controllers/history");
const Collection = require("./controllers/collection");
const Rating = require("./controllers/rating");
const UserPages = require("./controllers/userPages");
const Analytics = require("./controllers/analytics");
const passportService = require("./services/passport");
const passport = require("passport");
const validate = require("../middleware/validate");
const middleware = require("../middleware");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = (app) => {
  // ------------------------------------------------ //
  // *********** INDEX ROUTES *********** //
  // ------------------------------------------------ //
  app.post("/auth", requireAuth, Controller.getAuth);

  // ------------------------------------------------ //
  // *********** AUTHENTICATION ROUTES *********** //
  // ------------------------------------------------ //
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

  // ------------------------------------------------ //
  // *********** PROFILE ROUTES *********** //
  // ------------------------------------------------ //
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

  // ------------------------------------------------ //
  // *********** PUBLIC PROFILE ROUTES *********** //
  // ------------------------------------------------ //
  app.get("/api/users/:username/pages", PB.fetchPages);
  app.get("/api/users/:username/collections", PB.fetchCollections);

  // ------------------------------------------------ //
  // *********** USER'S PAGES MANAGER ROUTES *********** //
  // ------------------------------------------------ //
  app.get(
    "/api/user-pages/published",
    requireAuth,
    UserPages.fetchPublishedPages
  );
  app.get("/api/user-pages/draft", requireAuth, UserPages.fetchDraftPages);
  app.delete("/api/user-pages/draft", requireAuth, UserPages.deleteDraftPages);

  // ------------------------------------------------ //
  // *********** SUBSCRIPTIONS ROUTES *********** //
  // ------------------------------------------------ //
  // Subscribe or unsubscribe the user
  app.post("/api/subscription/:id", requireAuth, Subscription.toggle);
  // Fetch the list of authors user has subscribed
  app.get("/api/subscriptions", requireAuth, Subscription.fetchSubscriptions);

  // ------------------------------------------------ //
  // *********** READ LATER ROUTES *********** //
  // ------------------------------------------------ //
  app.patch("/api/read-later/:id", requireAuth, validate.id, ReadLater.toggle);
  app.delete("/api/read-later", requireAuth, ReadLater.remove);
  app.get("/api/read-later/", requireAuth, ReadLater.fetch);

  // ------------------------------------------------ //
  // *********** HISTORY ROUTES *********** //
  // ------------------------------------------------ //
  app.get("/api/history/", requireAuth, History.fetch);
  app.delete("/api/history", requireAuth, History.remove);

  // ------------------------------------------------ //
  // *********** RATING ROUTES *********** //
  // ------------------------------------------------ //
  app.patch("/api/rate/page/:id", requireAuth, Rating.ratePage);
  app.patch("/api/rate/comment/:id", requireAuth, Rating.rateComment);
  app.get("/api/liked-pages/", requireAuth, Rating.fetchLikedPages);

  // ------------------------------------------------ //
  // *********** COLLECTION ROUTES *********** //
  // ------------------------------------------------ //
  // Retrieve the data of a collection
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
  // Create a new collection
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
  // Update the name and description of a collection
  app.put("/api/collection/info/:id", requireAuth, Collection.updateInfo);
  // Change the order of one page (2 pages will be affected)
  app.put(
    "/api/collection/change-order/:id",
    requireAuth,
    Collection.changePageOrders
  );
  // Remove one or more pages from a collection
  app.put(
    "/api/collection/remove-pages/:id",
    requireAuth,
    Collection.removePages
  );
  // Delete a collection entirely
  app.delete("/api/collection/:id", requireAuth, Collection.delete);
  // Fetch all the collection user has created
  app.get("/api/collections/created", requireAuth, Collection.fetchCreated);
  // Fetch collections for add to collection modal (for add page)
  app.get(
    "/api/collections/created/:pageId",
    requireAuth,
    Collection.fetchCreatedFAP
  );
  // Fetch all the collections user has saved
  app.get("/api/collections/saved", requireAuth, Collection.fetchSaved);
  // Fetch all the collections user has saved and created
  app.get(
    "/api/collections/created-saved",
    requireAuth,
    Collection.fetchCreatedAndSaved
  );
  // Fetch all the collections user has created and shared
  app.get("/api/collections/shared/:username", Collection.fetchShared);

  // ------------------------------------------------ //
  // *********** ANALYTICS ROUTES *********** //
  // ------------------------------------------------ //
  app.post("/api/views/:id", Analytics.view);

  // ------------------------------------------------ //
  // *********** NEW PAGE ROUTES *********** //
  // ------------------------------------------------ //
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

  // ------------------------------------------------ //
  // *********** COMMENT ROUTES *********** //
  // ------------------------------------------------ //
  app.get("/api/comments/history", requireAuth, Comment.fetchUserComments);
  app.get("/api/comments/:pageId", Comment.fetchComments);
  app.get("/api/comment/:id/replies", Comment.fetchReplies);
  app.post("/api/comment/:pageId", requireAuth, Comment.addComment);
  app.put(
    "/api/comment/:id",
    requireAuth,
    middleware.checkCommentOwnership,
    Comment.updateComment
  );
  app.delete(
    "/api/comment/:id",
    requireAuth,
    middleware.checkCommentOwnership,
    Comment.deleteComment
  );

  // ------------------------------------------------ //
  // *********** PAGE ROUTES *********** //
  // ------------------------------------------------ //
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
};
