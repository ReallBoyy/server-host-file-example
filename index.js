const express = require("express");
const path = require("path");

const app = express();
const PORT = 80;

// CDN static files
app.set('trust proxies', 1);
app.use("/cdn", express.static(path.join(__dirname, "public"));

app.listen(PORT, () => {
  console.log(`CDN aktif di http://localhost:${PORT}`);
});
