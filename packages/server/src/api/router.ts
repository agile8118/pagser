import { Express } from "express";

// Controllers
import Authentication from "./controllers/authentication";

// Middleware
import validator from "./middleware/validator";

export default (app: Express) => {
  // Send a code to the user email address to verify that user owns the email
  /**
   * @swagger
   *
   */
  app.post(
    "/api/send-code",
    validator.name,
    validator.email,
    // validator.password,
    // validator.username,
    Authentication.sendCode
  );
};
