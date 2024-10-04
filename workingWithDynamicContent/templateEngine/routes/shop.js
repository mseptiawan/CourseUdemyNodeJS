const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

const adminData = require("./admin");
router.get("/", (_req, res, next) => {
  const products = adminData.products;
  res.render("shop", { prods: products, pageTitle: "shop", path: " /" });
});

module.exports = router;
