var express = require('express');
var cors = require('cors');
var multer = require('multer');
var app = express();

const upload = multer();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res) {
  const { originalname: name, mimetype: type, size } = req.file || {};

  res.json({ name, type, size });
});

app.listen(port, function () {
  console.log(`Your app is listening on port ${port}`);
});
