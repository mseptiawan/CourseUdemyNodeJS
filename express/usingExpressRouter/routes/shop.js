const express = require("express");
const router = express.Router();

router.get("/", (_req, res, next) => {
  console.log("middleware lain");
  res.send("<h1>Hello from express</h1>");
});
