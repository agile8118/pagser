import "./database/index.js";
import app from "./app.js";
import log from "./lib/log.js";

const PORT = Number(process.env.PORT) || 3080;

app.listen(PORT, () => {
  log(
    "Starting the server..." +
      "\n----------------------------------\n" +
      "Server has started on port " +
      PORT +
      "\n----------------------------------",
  );
  console.log("--------------------------------");
  console.log("Server has started on", PORT);
  console.log("View the API docs here:", `http://localhost:${PORT}/api-docs`);
  console.log("--------------------------------");
});
