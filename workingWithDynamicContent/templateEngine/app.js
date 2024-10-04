const http = require("http");
const path = require("path");
const express = require("express");
const adminData = require("./routes/admin.js");
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "pug");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminData.routes);
app.use(shopRoutes);

const server = http.createServer(app);
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "page not found" });
});

server.listen(3000);
