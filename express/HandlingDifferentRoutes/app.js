const http = require("http");
const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("selalu berjalan");
  next();
});
app.use("/add-product", (req, res, next) => {
  console.log("middleware lain");
  res.send("<h1>page add product</h1>");
});

app.use("/", (req, res, next) => {
  console.log("middleware lain");
  res.send("<h1>Hello from express</h1>");
});

const server = http.createServer(app);
server.listen(3000);
