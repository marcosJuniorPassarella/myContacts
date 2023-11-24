const express = require("express");

const app = express();

app.listen(3000, () =>
  console.log("🔥 Server started at http://localhost:3000")
);
app.get("/", (request, response) => {
  response.send("Hello World");
});
