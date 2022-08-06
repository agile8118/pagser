import { Express } from "express";

// Controllers
import Authentication from "./controllers/authentication";

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
};
