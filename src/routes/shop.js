const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", {
    pageTitle: "Shop Now",
    data: [
      { title: "First item" },
      { title: "First item" },
      { title: "First item" },
      { title: "First item" },
      { title: "First item" },
      { title: "First item" },
      { title: "First item" },
      { title: "First item" }
    ],
    path: "/"
  });
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
