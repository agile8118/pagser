import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import swaggerUI from "swagger-ui-express";
import path from "path";
import YAML from "yamljs";
import session from "express-session";

import apiRouter from "./api/router";
import templatesRouter from "./templates/router";
import log from "./lib/log";
import keys from "./config/keys";
import "./database";

process.env.TZ = "GMT";

const PORT = process.env.PORT || 3080;

const app = express();

// Swagger
const swaggerDocument = YAML.load(path.join(__dirname, "./swagger.yml"));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// Body parser
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));

// CORS
app.use(cors({ origin: "https://pagser.com/" }));

// For our view engine
app.set("view engine", "ejs");

// Compress all responses
app.use(compression());

// Use the public folder for our static files
app.use(express.static(path.join(__dirname, "../public")));

// For passport (req.user)
declare global {
  namespace Express {
    export interface User {
      id: string;
      username: string;
    }
  }
}

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
// Template routes
templatesRouter(app);

// Error handler
app.use((error, req, res, next) => {
  if (error.customError) {
    res.status(error.status).send(error.customError);
  } else {
    console.log("THIS IS FROM THE ERROR HANDLER!");

    log(error, "error");
    res.status(500).send("Internal server error.");
  }
});

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
