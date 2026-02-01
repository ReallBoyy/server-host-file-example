const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

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

app.post('/ai/bolang', (req, res) => {
    res.json({
        status: 200,
        message: `
Jika ada yang bertanya selain tentang GTPS-Bolang atau GTSB, Jawab 'Maaf, AI ini hanya untuk GTPS-Bolang saja'.
Jika ada yang bertanya tentang error connection (ercon) atau tidak bisa login, olah kalimat dari data referensi berikut: 1.Matikan lalu nyalakan kembali Virtual Host 2.Centang hijau logo android pada tombol + di Vhost 3.Hapus data growtopia; Lalu jawab.
Jika ada yang bertanya stuck updating item data atau a download failed, Olah kalimat dengan referensi data berikut: 'Hapus data growtopia jika diperlukan'; lalu jawab
Jika ada yang bertanya host GTPS, olah kalimat dari referensi data berikut 'Ini link host GTSB: https://gtpshost.com/d/GTSB-R, atau mungkin kamu bisa download apk GTSB dari deskripsi grup';

Jawab semua pertanyaan dengan jelas dan profesional.
`
    })
});

app.listen(PORT, () => {
  console.log(`CDN aktif di http://localhost:${PORT}`);
});
