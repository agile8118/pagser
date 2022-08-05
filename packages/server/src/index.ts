import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import swaggerUI from "swagger-ui-express";
import swaggerJsDocs from "swagger-jsdoc";
import session from "express-session";

import apiRouter from "./api/router";
import log from "./lib/log";
import keys from "./config/keys";
import "./database";

const PORT = process.env.PORT || 3080;

const app = express();

// Swagger
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(
    swaggerJsDocs({
      failOnErrors: true,
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Pagser API",
          version: "1.0.0",
          description: "",
        },
        server: [
          {
            url: `http://localhost:${PORT}`,
          },
        ],
      },
      apis: ["./src/api/router.js"],
    })
  )
);

// Body parser
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));

// CORS
app.use(cors({ origin: "https://pagser.com/" }));

// Compress all responses
app.use(compression());

// Session
declare module "express-session" {
  export interface SessionData {
    userEmailVerificationCode: number;
  }
}

app.use(
  session({
    secret: keys.sessionSecret as string,
    resave: false,
    saveUninitialized: false,
    // store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 1000 }, // 3 hours
  })
);

// Logging
app.use((req, res, next) => {
  const requestStart = Date.now();
  // Grab requester ip address
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  // Once the request is finished
  res.on("finish", () => {
    // Get req status code and message
    const { statusCode, statusMessage } = res;
    // Calculate how much it took the request to finish
    const processingTime = Date.now() - requestStart;

    // Format the log message and send it to log function
    log(
      ip +
        " -- " +
        req.method +
        " " +
        req.originalUrl +
        " " +
        statusCode +
        " " +
        statusMessage +
        " -- response-time: " +
        processingTime +
        " ms"
    );
  });
  next();
});

// API routes
apiRouter(app);

app.listen(PORT, () => {
  log(
    "Starting the server..." +
      "\n----------------------------------\n" +
      "Server has started on port " +
      PORT +
      "\n----------------------------------"
  );
  console.log("****************************");
  console.log("Server has started on", PORT);
  console.log("****************************");
});
