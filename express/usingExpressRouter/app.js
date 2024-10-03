const http = require("http");
const express = require("express");
const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(shopRoutes);

const server = http.createServer(app);
server.listen(3000);
