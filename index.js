const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

// CDN static files
app.set('trust proxy', 1);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
    );
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url} - ${res.statusCode}`);
    next();
});
app.use("/", express.static(path.join(__dirname, "public"));

app.listen(PORT, () => {
  console.log(`CDN aktif di http://localhost:${PORT}`);
});
