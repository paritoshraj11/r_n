const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const shopRouter = require("./routes/shop");
const adminRouter = require("./routes/admin");
const PORT = 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../", "public")));
app.use(shopRouter);
app.use("/admin", adminRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`server running on port::${PORT}`));
