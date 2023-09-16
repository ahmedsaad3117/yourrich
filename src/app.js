const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "\\" + "public");

app.get("", (request, response) => {
  response.render("index", {
    name: "You are rish :D",
  });
});

app.listen(3001, () => console.log("app is working on port 3000"));
