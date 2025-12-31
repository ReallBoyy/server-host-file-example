const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

// CDN static files
app.set('trust proxy', 1);
app.use('/', express.static(path(__dirname, 'public')));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
    );
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url} - ${res.statusCode}`);
    next();
});

app.all('/host', (req, res) => {
    res.send(`5.39.13.31 growtopia1.com\n5.39.13.31 growtopia2.com\n5.39.13.31 www.growtopia1.com\n5.39.13.31 www.growtopia2.com`);
});

app.listen(PORT, () => {
  console.log(`CDN aktif di http://localhost:${PORT}`);
});
