import cpeak, {
  serveStatic,
  parseJSON,
  swagger,
  auth,
  cookieParser,
  cors,
} from "cpeak";
import type {
  Cpeak,
  CpeakRequest as Request,
  CpeakResponse as Response,
} from "cpeak";
import ejs from "ejs";
import swaggerUiDist from "swagger-ui-dist";
import path from "path";
import YAML from "yamljs";
import apiRouter from "./api/router.js";
import testRouter from "./api/testRouter.js";
import templatesRouter from "./templates/router.js";
import log from "./lib/log.js";
import keys from "./config/keys.js";
import { DB } from "./database/index.js";
import {
  USER_PLACEHOLDER_IMAGE,
  PAGE_PLACEHOLDER_IMAGE,
  COLLECTION_PLACEHOLDER_IMAGE,
} from "@pagser/common";

process.env.TZ = "GMT";

export interface AppOptions {
  enableCors?: boolean;
  enableRequestLog?: boolean;
  enableSwagger?: boolean;
}

export function createApp(opts: AppOptions = {}): Cpeak {
  const isTest = process.env.NODE_ENV === "test";
  const {
    enableCors = !isTest,
    enableRequestLog = !isTest,
    enableSwagger = !isTest,
  } = opts;

  const app = cpeak({ compression: true });

  if (enableSwagger) {
    const swaggerDocument = YAML.load(
      path.join(path.resolve(), "./src/swagger.yml"),
    );

    app.beforeEach(swagger(swaggerDocument as object));
    app.beforeEach(
      serveStatic(swaggerUiDist.getAbsoluteFSPath(), undefined, {
        prefix: "/api-docs",
      }),
    );
  }

  const publicPath = new URL("../public", import.meta.url).pathname;
  app.beforeEach(serveStatic(publicPath));

  app.beforeEach(parseJSON());

  if (enableCors) {
    app.beforeEach(cors({ origin: "https://pagser.com" }));
  }

  // For rendering EJS templates
  const locals = {
    USER_PLACEHOLDER_IMAGE,
    PAGE_PLACEHOLDER_IMAGE,
    COLLECTION_PLACEHOLDER_IMAGE,
  };

  app.beforeEach((req, res, next) => {
    res.render = async (view: string, data?: Record<string, unknown>) => {
      const filePath = path.join(path.resolve(), "./views", view + ".ejs");
      const html = await ejs.renderFile(filePath, { ...locals, ...data });
      res.setHeader("Content-Type", "text/html");
      res.end(html);
    };
    next();
  });

  app.beforeEach(
    auth({
      secret: keys.tokenSecret as string,
      saveToken: async (tokenId, userId, expiresAt) => {
        await DB.insert("tokens", {
          id: tokenId,
          user_id: userId,
          expires_at: expiresAt,
        });
      },
      findToken: async (tokenId) => {
        const row = await DB.find<{ user_id: string; expires_at: Date }>(
          "SELECT user_id, expires_at FROM tokens WHERE id = $1",
          [tokenId],
        );
        return row ? { userId: row.user_id, expiresAt: row.expires_at } : null;
      },
      revokeToken: async (tokenId) => {
        await DB.delete("tokens", "id = $1", [tokenId]);
      },
    }),
  );

  app.beforeEach(cookieParser({ secret: keys.cookieSecret as string }));

  if (enableRequestLog) {
    app.beforeEach((req, res, next) => {
      const requestStart = Date.now();
      const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

      res.on("finish", () => {
        const { statusCode, statusMessage } = res;
        const processingTime = Date.now() - requestStart;
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
            " ms",
        );
      });
      next();
    });
  }

  app.route("get", "/", async (req: Request, res: Response) => {
    const token = req.signedCookies?.token as string | false;
    if (token) {
      const result = await req.verifyToken(token as string);
      if (result) {
        res.writeHead(302, { Location: "/home" });
        res.end();
        return;
      }
    }
    res.sendFile(path.join(publicPath, "./index.html"), "text/html");
  });

  // Test-only routes (registered before apiRouter to beat the wildcard routes)
  if (process.env.NODE_ENV === "test") testRouter(app);

  // API routes
  apiRouter(app);
  // Template routes
  templatesRouter(app);

  // Error handler
  app.handleErr((error: any, req: any, res: any) => {
    if (error && error.status) {
      res.status(error.status).json({ message: error.message });
    } else {
      log(error, "error");
      res.status(500).json({
        message: "Something went wrong on our end. Please try again.",
      });
    }
  });

  return app;
}

export default createApp();
