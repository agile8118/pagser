import { Express } from "express";

// Controllers
import Authentication from "./controllers/authentication";

// Middleware
import validator from "./middleware/validator";
import { requireAuth, logTheUserIn } from "./services/passport";

export default (app: Express) => {
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
    validator.isId,
    validator.password,
    validator.passwordResetToken,
    Authentication.resetPassword
  );
};
