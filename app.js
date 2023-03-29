const express = require("express");

const app = express();
//DELETE OR COMMENT OUT HOST
// const host = 'localhost';
const port = 3000;
app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("layout");
});

// Listener DELETE OR DONT ADD HOST PARAM IN LISTENER
app.listen(port, () => {
  console.log(`Budget is listening on port ${port}!`);
});
