import type { Cpeak } from "cpeak";
import * as TestHelpers from "./controllers/testHelpers.js";

export default (app: Cpeak) => {
  app.route("get", "/api/test/email-code", TestHelpers.getEmailCode);
  app.route("post", "/api/test/reset", TestHelpers.resetDb);
};
