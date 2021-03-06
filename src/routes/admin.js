const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product"
  });
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  let body = req.body || {};
  console.log(" product route data ", body.title);
  res.redirect("/");
});

module.exports = router;
