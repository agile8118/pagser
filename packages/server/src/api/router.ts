import { Express } from "express";

// Controllers
import Authentication, {
  requireAuth,
  requireSignIn,
} from "./controllers/authentication";

// Middleware
import validator from "./middleware/validator";

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
    validator.password,
    validator.username,
    validator.usernameAvailability,
    validator.userEmailVerificationCode,
    Authentication.register
  );

  // Logs a user in and sends back a token
  app.post("/login", requireSignIn, Authentication.login);
};
