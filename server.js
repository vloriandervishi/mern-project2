const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;
const path = require("path");
const roots = require("./routes/roots");

app.use("/", express.static(path.join(__dirname, "/public")));
app.use("/", roots);
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
