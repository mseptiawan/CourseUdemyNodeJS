const http = require("http");
const express = require("express");
const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoutes);
app.use(shopRoutes);

const server = http.createServer(app);
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

server.listen(3000);
