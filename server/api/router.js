const Authentication = require("./controllers/authentication");
const Controller = require("./controllers");
const Admin = require("./controllers/admin");
const Page = require("./controllers/page");
const Comment = require("./controllers/comment");
const passportService = require("./services/passport");
const passport = require("passport");
const validate = require("../middleware/validate");
const middleware = require("../middleware");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
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
  // *********** INDEX ROUTES *********** //
  app.get("/api/home", Controller.fetchHomePages);

  // *********** ADMIN ROUTES *********** //
  app.get("/api/profile", requireAuth, Admin.fetchUserData);
  app.patch(
    "/api/profile",
    requireAuth,
    validate.name,
    validate.headline,
    validate.biography,
    validate.links,
    Admin.updateUserData
  );
  app.get("/api/account/email", requireAuth, Admin.fetchUserEmail);
  app.patch("/api/account/email", requireAuth, Admin.updateUserEmail);
  app.patch(
    "/api/account/password",
    requireAuth,
    validate.password,
    Admin.updateUserPassword
  );
  app.put("/api/photo", requireAuth, Admin.uploadUserImage);

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
  app.patch("/api/pages/:id/favorite", requireAuth, Page.favorite);
  app.patch("/api/pages/:id/rate", requireAuth, Page.rate);
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
  app.get("/api/:username/:url", Page.fetchSpecificPageData);

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

  // *********** PAGE MANAGER ROUTES *********** //
  app.get("/api/admin/pages/:kind", requireAuth, Admin.fetchPages);
  app.put(
    "/api/admin/pages/unfavorite-pages",
    requireAuth,
    Admin.unfavoritePages
  );
  app.put(
    "/api/admin/pages/delete-draft-pages",
    requireAuth,
    Admin.deleteDraftPages
  );

  app.post("/auth", requireAuth, Controller.getAuth);
};
