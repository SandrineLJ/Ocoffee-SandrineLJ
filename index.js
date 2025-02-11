

import express from "express";
import path from "node:path";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "./app/views"));
app.set(express.static(path.join(import.meta.dirname, "public")));

/*test serveur ok
app.get("/", (req, res) => {
  res.send("hello world!");
});
*/

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});